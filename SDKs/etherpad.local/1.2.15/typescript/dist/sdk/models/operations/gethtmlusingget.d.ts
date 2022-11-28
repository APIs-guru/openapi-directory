import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetHtmlUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
    rev?: string;
}
export declare class GetHtmlUsingGet200ApplicationJsonData extends SpeakeasyBase {
    html?: string;
}
export declare class GetHtmlUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetHtmlUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class GetHtmlUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetHtmlUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetHtmlUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetHtmlUsingGetRequest extends SpeakeasyBase {
    queryParams: GetHtmlUsingGetQueryParams;
}
export declare class GetHtmlUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getHtmlUsingGet200ApplicationJsonObject?: GetHtmlUsingGet200ApplicationJson;
    getHtmlUsingGet400ApplicationJsonObject?: GetHtmlUsingGet400ApplicationJson;
    getHtmlUsingGet401ApplicationJsonObject?: GetHtmlUsingGet401ApplicationJson;
    getHtmlUsingGet500ApplicationJsonObject?: GetHtmlUsingGet500ApplicationJson;
}
