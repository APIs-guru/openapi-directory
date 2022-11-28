import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToggleNotificationChannelsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class ToggleNotificationChannelsRequest extends SpeakeasyBase {
    headers: ToggleNotificationChannelsHeaders;
    request: shared.NotificationChannelActivationRequest;
}
export declare class ToggleNotificationChannelsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    notificationChannelList?: shared.NotificationChannelList;
    statusCode: number;
}
