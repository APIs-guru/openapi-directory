import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CampaignEventFilter } from "./campaigneventfilter";
import { FrequencyEnum } from "./frequencyenum";
import { QuietTime } from "./quiettime";


// Schedule
/** 
 * Specifies the schedule settings for a campaign.
**/
export class Schedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: string;

  @Metadata({ data: "json, name=EventFilter" })
  eventFilter?: CampaignEventFilter;

  @Metadata({ data: "json, name=Frequency" })
  frequency?: FrequencyEnum;

  @Metadata({ data: "json, name=IsLocalTime" })
  isLocalTime?: boolean;

  @Metadata({ data: "json, name=QuietTime" })
  quietTime?: QuietTime;

  @Metadata({ data: "json, name=StartTime" })
  startTime: string;

  @Metadata({ data: "json, name=Timezone" })
  timezone?: string;
}
