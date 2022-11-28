import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignEventFilter } from "./campaigneventfilter";
import { QuietTime } from "./quiettime";
/**
 * Schedule of the campaign.
**/
export declare class InAppCampaignSchedule extends SpeakeasyBase {
    endDate?: string;
    eventFilter?: CampaignEventFilter;
    quietTime?: QuietTime;
}
