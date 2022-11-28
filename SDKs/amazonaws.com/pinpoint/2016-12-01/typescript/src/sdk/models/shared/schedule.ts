import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignEventFilter } from "./campaigneventfilter";
import { FrequencyEnum } from "./frequencyenum";
import { QuietTime } from "./quiettime";



// Schedule
/** 
 * Specifies the schedule settings for a campaign.
**/
export class Schedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=EventFilter" })
  eventFilter?: CampaignEventFilter;

  @SpeakeasyMetadata({ data: "json, name=Frequency" })
  frequency?: FrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=IsLocalTime" })
  isLocalTime?: boolean;

  @SpeakeasyMetadata({ data: "json, name=QuietTime" })
  quietTime?: QuietTime;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime: string;

  @SpeakeasyMetadata({ data: "json, name=Timezone" })
  timezone?: string;
}
