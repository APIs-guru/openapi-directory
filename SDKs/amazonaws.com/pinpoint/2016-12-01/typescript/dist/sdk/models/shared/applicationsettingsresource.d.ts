import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignHook } from "./campaignhook";
import { CampaignLimits } from "./campaignlimits";
import { QuietTime } from "./quiettime";
/**
 * Provides information about an application, including the default settings for an application.
**/
export declare class ApplicationSettingsResource extends SpeakeasyBase {
    applicationId: string;
    campaignHook?: CampaignHook;
    lastModifiedDate?: string;
    limits?: CampaignLimits;
    quietTime?: QuietTime;
}
