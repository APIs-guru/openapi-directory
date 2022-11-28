import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignEventFilter } from "./campaigneventfilter";
import { FrequencyEnum } from "./frequencyenum";
import { QuietTime } from "./quiettime";
/**
 * Specifies the schedule settings for a campaign.
**/
export declare class Schedule extends SpeakeasyBase {
    endTime?: string;
    eventFilter?: CampaignEventFilter;
    frequency?: FrequencyEnum;
    isLocalTime?: boolean;
    quietTime?: QuietTime;
    startTime: string;
    timezone?: string;
}
