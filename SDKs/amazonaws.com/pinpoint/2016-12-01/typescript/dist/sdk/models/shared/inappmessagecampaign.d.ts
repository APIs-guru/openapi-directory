import { SpeakeasyBase } from "../../../internal/utils";
import { InAppMessage } from "./inappmessage";
import { InAppCampaignSchedule } from "./inappcampaignschedule";
/**
 * Targeted in-app message campaign.
**/
export declare class InAppMessageCampaign extends SpeakeasyBase {
    campaignId?: string;
    dailyCap?: number;
    inAppMessage?: InAppMessage;
    priority?: number;
    schedule?: InAppCampaignSchedule;
    sessionCap?: number;
    totalCap?: number;
    treatmentId?: string;
}
