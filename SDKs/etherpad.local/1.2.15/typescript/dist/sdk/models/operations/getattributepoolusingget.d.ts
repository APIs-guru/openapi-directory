import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAttributePoolUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class GetAttributePoolUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetAttributePoolUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetAttributePoolUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetAttributePoolUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetAttributePoolUsingGetRequest extends SpeakeasyBase {
    queryParams: GetAttributePoolUsingGetQueryParams;
}
export declare class GetAttributePoolUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAttributePoolUsingGet200ApplicationJsonObject?: GetAttributePoolUsingGet200ApplicationJson;
    getAttributePoolUsingGet400ApplicationJsonObject?: GetAttributePoolUsingGet400ApplicationJson;
    getAttributePoolUsingGet401ApplicationJsonObject?: GetAttributePoolUsingGet401ApplicationJson;
    getAttributePoolUsingGet500ApplicationJsonObject?: GetAttributePoolUsingGet500ApplicationJson;
}
