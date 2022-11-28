import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetHtmlUsingGetQueryParams extends SpeakeasyBase {
    html?: string;
    padId?: string;
}
export declare class SetHtmlUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetHtmlUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetHtmlUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetHtmlUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetHtmlUsingGetRequest extends SpeakeasyBase {
    queryParams: SetHtmlUsingGetQueryParams;
}
export declare class SetHtmlUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setHtmlUsingGet200ApplicationJsonObject?: SetHtmlUsingGet200ApplicationJson;
    setHtmlUsingGet400ApplicationJsonObject?: SetHtmlUsingGet400ApplicationJson;
    setHtmlUsingGet401ApplicationJsonObject?: SetHtmlUsingGet401ApplicationJson;
    setHtmlUsingGet500ApplicationJsonObject?: SetHtmlUsingGet500ApplicationJson;
}
