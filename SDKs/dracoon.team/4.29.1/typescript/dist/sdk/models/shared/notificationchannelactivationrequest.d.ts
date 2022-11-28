import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for switching notification channel status
**/
export declare class NotificationChannelActivationRequest extends SpeakeasyBase {
    channelId: number;
    isEnabled: boolean;
}
