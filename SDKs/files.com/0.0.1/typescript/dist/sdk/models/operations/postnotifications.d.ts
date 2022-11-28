import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostNotificationsRequestBody extends SpeakeasyBase {
    groupId?: number;
    notifyOnCopy?: boolean;
    notifyUserActions?: boolean;
    path?: string;
    recursive?: boolean;
    sendInterval?: string;
    userId?: number;
    username?: string;
}
export declare class PostNotificationsRequest extends SpeakeasyBase {
    request?: PostNotificationsRequestBody;
}
export declare class PostNotificationsResponse extends SpeakeasyBase {
    contentType: string;
    notificationEntity?: shared.NotificationEntity;
    statusCode: number;
}
