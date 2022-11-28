import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchNotificationsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PatchNotificationsIdRequestBody extends SpeakeasyBase {
    notifyOnCopy?: boolean;
    notifyUserActions?: boolean;
    recursive?: boolean;
    sendInterval?: string;
}
export declare class PatchNotificationsIdRequest extends SpeakeasyBase {
    pathParams: PatchNotificationsIdPathParams;
    request?: PatchNotificationsIdRequestBody;
}
export declare class PatchNotificationsIdResponse extends SpeakeasyBase {
    contentType: string;
    notificationEntity?: shared.NotificationEntity;
    statusCode: number;
}
