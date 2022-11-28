import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetHtmlUsingPostQueryParams extends SpeakeasyBase {
    html?: string;
    padId?: string;
}
export declare class SetHtmlUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetHtmlUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetHtmlUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetHtmlUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetHtmlUsingPostRequest extends SpeakeasyBase {
    queryParams: SetHtmlUsingPostQueryParams;
}
export declare class SetHtmlUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setHtmlUsingPost200ApplicationJsonObject?: SetHtmlUsingPost200ApplicationJson;
    setHtmlUsingPost400ApplicationJsonObject?: SetHtmlUsingPost400ApplicationJson;
    setHtmlUsingPost401ApplicationJsonObject?: SetHtmlUsingPost401ApplicationJson;
    setHtmlUsingPost500ApplicationJsonObject?: SetHtmlUsingPost500ApplicationJson;
}
