import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CampaignEventFilter } from "./campaigneventfilter";
import { QuietTime } from "./quiettime";


// InAppCampaignSchedule
/** 
 * Schedule of the campaign.
**/
export class InAppCampaignSchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndDate" })
  endDate?: string;

  @Metadata({ data: "json, name=EventFilter" })
  eventFilter?: CampaignEventFilter;

  @Metadata({ data: "json, name=QuietTime" })
  quietTime?: QuietTime;
}
