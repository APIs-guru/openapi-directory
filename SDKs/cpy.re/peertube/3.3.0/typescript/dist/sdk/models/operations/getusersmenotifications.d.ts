import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersMeNotificationsQueryParams extends SpeakeasyBase {
    count?: number;
    sort?: string;
    start?: number;
    unread?: boolean;
}
export declare class GetUsersMeNotificationsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetUsersMeNotificationsRequest extends SpeakeasyBase {
    queryParams: GetUsersMeNotificationsQueryParams;
    security: GetUsersMeNotificationsSecurity;
}
export declare class GetUsersMeNotificationsResponse extends SpeakeasyBase {
    contentType: string;
    notificationListResponse?: any;
    statusCode: number;
}
