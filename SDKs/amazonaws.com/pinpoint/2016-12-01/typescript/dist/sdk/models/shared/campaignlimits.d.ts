import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns in the application can send.
**/
export declare class CampaignLimits extends SpeakeasyBase {
    daily?: number;
    maximumDuration?: number;
    messagesPerSecond?: number;
    session?: number;
    total?: number;
}
