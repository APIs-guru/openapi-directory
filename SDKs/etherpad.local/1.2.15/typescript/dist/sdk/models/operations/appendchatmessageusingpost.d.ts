import { SpeakeasyBase } from "../../../internal/utils";
export declare class AppendChatMessageUsingPostQueryParams extends SpeakeasyBase {
    authorId?: string;
    padId?: string;
    text?: string;
    time?: string;
}
export declare class AppendChatMessageUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class AppendChatMessageUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class AppendChatMessageUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class AppendChatMessageUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class AppendChatMessageUsingPostRequest extends SpeakeasyBase {
    queryParams: AppendChatMessageUsingPostQueryParams;
}
export declare class AppendChatMessageUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    appendChatMessageUsingPost200ApplicationJsonObject?: AppendChatMessageUsingPost200ApplicationJson;
    appendChatMessageUsingPost400ApplicationJsonObject?: AppendChatMessageUsingPost400ApplicationJson;
    appendChatMessageUsingPost401ApplicationJsonObject?: AppendChatMessageUsingPost401ApplicationJson;
    appendChatMessageUsingPost500ApplicationJsonObject?: AppendChatMessageUsingPost500ApplicationJson;
}
