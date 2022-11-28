import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetChatHeadUsingPostQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class GetChatHeadUsingPost200ApplicationJsonDataChatHead extends SpeakeasyBase {
    text?: string;
    time?: number;
    userId?: string;
    userName?: string;
}
export declare class GetChatHeadUsingPost200ApplicationJsonData extends SpeakeasyBase {
    chatHead?: GetChatHeadUsingPost200ApplicationJsonDataChatHead;
}
export declare class GetChatHeadUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetChatHeadUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class GetChatHeadUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetChatHeadUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetChatHeadUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetChatHeadUsingPostRequest extends SpeakeasyBase {
    queryParams: GetChatHeadUsingPostQueryParams;
}
export declare class GetChatHeadUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getChatHeadUsingPost200ApplicationJsonObject?: GetChatHeadUsingPost200ApplicationJson;
    getChatHeadUsingPost400ApplicationJsonObject?: GetChatHeadUsingPost400ApplicationJson;
    getChatHeadUsingPost401ApplicationJsonObject?: GetChatHeadUsingPost401ApplicationJson;
    getChatHeadUsingPost500ApplicationJsonObject?: GetChatHeadUsingPost500ApplicationJson;
}
