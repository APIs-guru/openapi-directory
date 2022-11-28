import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutNotificationsMarkReadJsonRequestBody extends SpeakeasyBase {
    id?: number;
}
export declare class PutNotificationsMarkReadJson200ApplicationJson extends SpeakeasyBase {
    success?: string;
}
export declare class PutNotificationsMarkReadJsonRequest extends SpeakeasyBase {
    request?: PutNotificationsMarkReadJsonRequestBody;
}
export declare class PutNotificationsMarkReadJsonResponse extends SpeakeasyBase {
    contentType: string;
    putNotificationsMarkReadJson200ApplicationJsonObject?: PutNotificationsMarkReadJson200ApplicationJson;
    statusCode: number;
}
