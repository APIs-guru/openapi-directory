import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPadIdUsingGetQueryParams extends SpeakeasyBase {
    roId?: string;
}
export declare class GetPadIdUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetPadIdUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetPadIdUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetPadIdUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetPadIdUsingGetRequest extends SpeakeasyBase {
    queryParams: GetPadIdUsingGetQueryParams;
}
export declare class GetPadIdUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPadIdUsingGet200ApplicationJsonObject?: GetPadIdUsingGet200ApplicationJson;
    getPadIdUsingGet400ApplicationJsonObject?: GetPadIdUsingGet400ApplicationJson;
    getPadIdUsingGet401ApplicationJsonObject?: GetPadIdUsingGet401ApplicationJson;
    getPadIdUsingGet500ApplicationJsonObject?: GetPadIdUsingGet500ApplicationJson;
}
