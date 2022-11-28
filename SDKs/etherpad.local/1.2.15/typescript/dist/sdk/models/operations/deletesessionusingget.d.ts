import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSessionUsingGetQueryParams extends SpeakeasyBase {
    sessionId?: string;
}
export declare class DeleteSessionUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeleteSessionUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeleteSessionUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeleteSessionUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeleteSessionUsingGetRequest extends SpeakeasyBase {
    queryParams: DeleteSessionUsingGetQueryParams;
}
export declare class DeleteSessionUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteSessionUsingGet200ApplicationJsonObject?: DeleteSessionUsingGet200ApplicationJson;
    deleteSessionUsingGet400ApplicationJsonObject?: DeleteSessionUsingGet400ApplicationJson;
    deleteSessionUsingGet401ApplicationJsonObject?: DeleteSessionUsingGet401ApplicationJson;
    deleteSessionUsingGet500ApplicationJsonObject?: DeleteSessionUsingGet500ApplicationJson;
}
