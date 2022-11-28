import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostTIdNotificationsJsonPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostTIdNotificationsJsonHeaders extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
}
export declare enum PostTIdNotificationsJsonRequestBodyNotificationLevelEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class PostTIdNotificationsJsonRequestBody extends SpeakeasyBase {
    notificationLevel: PostTIdNotificationsJsonRequestBodyNotificationLevelEnum;
}
export declare class PostTIdNotificationsJson200ApplicationJson extends SpeakeasyBase {
    success?: string;
}
export declare class PostTIdNotificationsJsonRequest extends SpeakeasyBase {
    pathParams: PostTIdNotificationsJsonPathParams;
    headers: PostTIdNotificationsJsonHeaders;
    request?: PostTIdNotificationsJsonRequestBody;
}
export declare class PostTIdNotificationsJsonResponse extends SpeakeasyBase {
    contentType: string;
    postTIdNotificationsJson200ApplicationJsonObject?: PostTIdNotificationsJson200ApplicationJson;
    statusCode: number;
}
