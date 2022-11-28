import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetReadOnlyIdUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class GetReadOnlyIdUsingGet200ApplicationJsonData extends SpeakeasyBase {
    readOnlyId?: string;
}
export declare class GetReadOnlyIdUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetReadOnlyIdUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class GetReadOnlyIdUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetReadOnlyIdUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetReadOnlyIdUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetReadOnlyIdUsingGetRequest extends SpeakeasyBase {
    queryParams: GetReadOnlyIdUsingGetQueryParams;
}
export declare class GetReadOnlyIdUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getReadOnlyIdUsingGet200ApplicationJsonObject?: GetReadOnlyIdUsingGet200ApplicationJson;
    getReadOnlyIdUsingGet400ApplicationJsonObject?: GetReadOnlyIdUsingGet400ApplicationJson;
    getReadOnlyIdUsingGet401ApplicationJsonObject?: GetReadOnlyIdUsingGet401ApplicationJson;
    getReadOnlyIdUsingGet500ApplicationJsonObject?: GetReadOnlyIdUsingGet500ApplicationJson;
}
