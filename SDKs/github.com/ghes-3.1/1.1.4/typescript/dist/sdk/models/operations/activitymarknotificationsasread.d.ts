import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityMarkNotificationsAsReadRequestBody extends SpeakeasyBase {
    lastReadAt?: Date;
    read?: boolean;
}
export declare class ActivityMarkNotificationsAsRead202ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class ActivityMarkNotificationsAsReadRequest extends SpeakeasyBase {
    request?: ActivityMarkNotificationsAsReadRequestBody;
}
export declare class ActivityMarkNotificationsAsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    activityMarkNotificationsAsRead202ApplicationJsonObject?: ActivityMarkNotificationsAsRead202ApplicationJson;
    basicError?: shared.BasicError;
}
