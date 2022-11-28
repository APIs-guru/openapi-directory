import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTextUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
    rev?: string;
}
export declare class GetTextUsingGet200ApplicationJsonData extends SpeakeasyBase {
    text?: string;
}
export declare class GetTextUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetTextUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class GetTextUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetTextUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetTextUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetTextUsingGetRequest extends SpeakeasyBase {
    queryParams: GetTextUsingGetQueryParams;
}
export declare class GetTextUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTextUsingGet200ApplicationJsonObject?: GetTextUsingGet200ApplicationJson;
    getTextUsingGet400ApplicationJsonObject?: GetTextUsingGet400ApplicationJson;
    getTextUsingGet401ApplicationJsonObject?: GetTextUsingGet401ApplicationJson;
    getTextUsingGet500ApplicationJsonObject?: GetTextUsingGet500ApplicationJson;
}
