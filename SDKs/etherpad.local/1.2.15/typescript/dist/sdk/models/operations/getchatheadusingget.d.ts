import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetChatHeadUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class GetChatHeadUsingGet200ApplicationJsonDataChatHead extends SpeakeasyBase {
    text?: string;
    time?: number;
    userId?: string;
    userName?: string;
}
export declare class GetChatHeadUsingGet200ApplicationJsonData extends SpeakeasyBase {
    chatHead?: GetChatHeadUsingGet200ApplicationJsonDataChatHead;
}
export declare class GetChatHeadUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetChatHeadUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class GetChatHeadUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetChatHeadUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetChatHeadUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetChatHeadUsingGetRequest extends SpeakeasyBase {
    queryParams: GetChatHeadUsingGetQueryParams;
}
export declare class GetChatHeadUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getChatHeadUsingGet200ApplicationJsonObject?: GetChatHeadUsingGet200ApplicationJson;
    getChatHeadUsingGet400ApplicationJsonObject?: GetChatHeadUsingGet400ApplicationJson;
    getChatHeadUsingGet401ApplicationJsonObject?: GetChatHeadUsingGet401ApplicationJson;
    getChatHeadUsingGet500ApplicationJsonObject?: GetChatHeadUsingGet500ApplicationJson;
}
