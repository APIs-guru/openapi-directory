import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestListOfNotificationConfigsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestListOfNotificationConfigsRequest extends SpeakeasyBase {
    headers: RequestListOfNotificationConfigsHeaders;
}
export declare class RequestListOfNotificationConfigsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    notificationConfigList?: shared.NotificationConfigList;
    statusCode: number;
}
