import { SpeakeasyBase } from "../../../internal/utils";
export declare class AppendChatMessageUsingGetQueryParams extends SpeakeasyBase {
    authorId?: string;
    padId?: string;
    text?: string;
    time?: string;
}
export declare class AppendChatMessageUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class AppendChatMessageUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class AppendChatMessageUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class AppendChatMessageUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class AppendChatMessageUsingGetRequest extends SpeakeasyBase {
    queryParams: AppendChatMessageUsingGetQueryParams;
}
export declare class AppendChatMessageUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    appendChatMessageUsingGet200ApplicationJsonObject?: AppendChatMessageUsingGet200ApplicationJson;
    appendChatMessageUsingGet400ApplicationJsonObject?: AppendChatMessageUsingGet400ApplicationJson;
    appendChatMessageUsingGet401ApplicationJsonObject?: AppendChatMessageUsingGet401ApplicationJson;
    appendChatMessageUsingGet500ApplicationJsonObject?: AppendChatMessageUsingGet500ApplicationJson;
}
