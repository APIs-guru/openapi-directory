import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetChatHistoryUsingGetQueryParams extends SpeakeasyBase {
    end?: string;
    padId?: string;
    start?: string;
}
export declare class GetChatHistoryUsingGet200ApplicationJsonDataMessages extends SpeakeasyBase {
    text?: string;
    time?: number;
    userId?: string;
    userName?: string;
}
export declare class GetChatHistoryUsingGet200ApplicationJsonData extends SpeakeasyBase {
    messages?: GetChatHistoryUsingGet200ApplicationJsonDataMessages[];
}
export declare class GetChatHistoryUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetChatHistoryUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class GetChatHistoryUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetChatHistoryUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetChatHistoryUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetChatHistoryUsingGetRequest extends SpeakeasyBase {
    queryParams: GetChatHistoryUsingGetQueryParams;
}
export declare class GetChatHistoryUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getChatHistoryUsingGet200ApplicationJsonObject?: GetChatHistoryUsingGet200ApplicationJson;
    getChatHistoryUsingGet400ApplicationJsonObject?: GetChatHistoryUsingGet400ApplicationJson;
    getChatHistoryUsingGet401ApplicationJsonObject?: GetChatHistoryUsingGet401ApplicationJson;
    getChatHistoryUsingGet500ApplicationJsonObject?: GetChatHistoryUsingGet500ApplicationJson;
}
