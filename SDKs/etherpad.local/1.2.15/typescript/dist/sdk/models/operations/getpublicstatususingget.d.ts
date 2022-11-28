import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPublicStatusUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class GetPublicStatusUsingGet200ApplicationJsonData extends SpeakeasyBase {
    publicStatus?: boolean;
}
export declare class GetPublicStatusUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetPublicStatusUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class GetPublicStatusUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetPublicStatusUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetPublicStatusUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetPublicStatusUsingGetRequest extends SpeakeasyBase {
    queryParams: GetPublicStatusUsingGetQueryParams;
}
export declare class GetPublicStatusUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPublicStatusUsingGet200ApplicationJsonObject?: GetPublicStatusUsingGet200ApplicationJson;
    getPublicStatusUsingGet400ApplicationJsonObject?: GetPublicStatusUsingGet400ApplicationJson;
    getPublicStatusUsingGet401ApplicationJsonObject?: GetPublicStatusUsingGet401ApplicationJson;
    getPublicStatusUsingGet500ApplicationJsonObject?: GetPublicStatusUsingGet500ApplicationJson;
}
