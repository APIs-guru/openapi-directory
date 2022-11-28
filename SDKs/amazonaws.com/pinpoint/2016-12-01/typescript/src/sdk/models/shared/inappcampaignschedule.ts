import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignEventFilter } from "./campaigneventfilter";
import { QuietTime } from "./quiettime";



// InAppCampaignSchedule
/** 
 * Schedule of the campaign.
**/
export class InAppCampaignSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=EventFilter" })
  eventFilter?: CampaignEventFilter;

  @SpeakeasyMetadata({ data: "json, name=QuietTime" })
  quietTime?: QuietTime;
}
