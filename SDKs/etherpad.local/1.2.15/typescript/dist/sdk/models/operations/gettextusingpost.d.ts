import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTextUsingPostQueryParams extends SpeakeasyBase {
    padId?: string;
    rev?: string;
}
export declare class GetTextUsingPost200ApplicationJsonData extends SpeakeasyBase {
    text?: string;
}
export declare class GetTextUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetTextUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class GetTextUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetTextUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetTextUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetTextUsingPostRequest extends SpeakeasyBase {
    queryParams: GetTextUsingPostQueryParams;
}
export declare class GetTextUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTextUsingPost200ApplicationJsonObject?: GetTextUsingPost200ApplicationJson;
    getTextUsingPost400ApplicationJsonObject?: GetTextUsingPost400ApplicationJson;
    getTextUsingPost401ApplicationJsonObject?: GetTextUsingPost401ApplicationJson;
    getTextUsingPost500ApplicationJsonObject?: GetTextUsingPost500ApplicationJson;
}
