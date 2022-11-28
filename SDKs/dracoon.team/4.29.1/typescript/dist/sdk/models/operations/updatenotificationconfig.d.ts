import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateNotificationConfigPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UpdateNotificationConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UpdateNotificationConfigRequest extends SpeakeasyBase {
    pathParams: UpdateNotificationConfigPathParams;
    headers: UpdateNotificationConfigHeaders;
    request: shared.NotificationConfigChangeRequest;
}
export declare class UpdateNotificationConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    notificationConfig?: shared.NotificationConfig;
    statusCode: number;
}
