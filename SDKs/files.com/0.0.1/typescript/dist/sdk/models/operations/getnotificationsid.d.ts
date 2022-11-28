import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNotificationsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetNotificationsIdRequest extends SpeakeasyBase {
    pathParams: GetNotificationsIdPathParams;
}
export declare class GetNotificationsIdResponse extends SpeakeasyBase {
    contentType: string;
    notificationEntity?: shared.NotificationEntity;
    statusCode: number;
}
