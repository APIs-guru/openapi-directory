import { SpeakeasyBase } from "../../../internal/utils";
export declare class RestoreRevisionUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
    rev?: string;
}
export declare class RestoreRevisionUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class RestoreRevisionUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class RestoreRevisionUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class RestoreRevisionUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class RestoreRevisionUsingGetRequest extends SpeakeasyBase {
    queryParams: RestoreRevisionUsingGetQueryParams;
}
export declare class RestoreRevisionUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    restoreRevisionUsingGet200ApplicationJsonObject?: RestoreRevisionUsingGet200ApplicationJson;
    restoreRevisionUsingGet400ApplicationJsonObject?: RestoreRevisionUsingGet400ApplicationJson;
    restoreRevisionUsingGet401ApplicationJsonObject?: RestoreRevisionUsingGet401ApplicationJson;
    restoreRevisionUsingGet500ApplicationJsonObject?: RestoreRevisionUsingGet500ApplicationJson;
}
