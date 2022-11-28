import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestNotificationChannelsInfoHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestNotificationChannelsInfoRequest extends SpeakeasyBase {
    headers: RequestNotificationChannelsInfoHeaders;
}
export declare class RequestNotificationChannelsInfoResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    notificationChannelList?: shared.NotificationChannelList;
    statusCode: number;
}
