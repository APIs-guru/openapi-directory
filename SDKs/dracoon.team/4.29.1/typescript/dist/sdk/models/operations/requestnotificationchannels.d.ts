import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestNotificationChannelsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestNotificationChannelsRequest extends SpeakeasyBase {
    headers: RequestNotificationChannelsHeaders;
}
export declare class RequestNotificationChannelsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    notificationChannelList?: shared.NotificationChannelList;
    statusCode: number;
}
