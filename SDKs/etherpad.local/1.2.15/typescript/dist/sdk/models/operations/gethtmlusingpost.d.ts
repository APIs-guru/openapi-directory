import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetHtmlUsingPostQueryParams extends SpeakeasyBase {
    padId?: string;
    rev?: string;
}
export declare class GetHtmlUsingPost200ApplicationJsonData extends SpeakeasyBase {
    html?: string;
}
export declare class GetHtmlUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetHtmlUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class GetHtmlUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetHtmlUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetHtmlUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetHtmlUsingPostRequest extends SpeakeasyBase {
    queryParams: GetHtmlUsingPostQueryParams;
}
export declare class GetHtmlUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getHtmlUsingPost200ApplicationJsonObject?: GetHtmlUsingPost200ApplicationJson;
    getHtmlUsingPost400ApplicationJsonObject?: GetHtmlUsingPost400ApplicationJson;
    getHtmlUsingPost401ApplicationJsonObject?: GetHtmlUsingPost401ApplicationJson;
    getHtmlUsingPost500ApplicationJsonObject?: GetHtmlUsingPost500ApplicationJson;
}
