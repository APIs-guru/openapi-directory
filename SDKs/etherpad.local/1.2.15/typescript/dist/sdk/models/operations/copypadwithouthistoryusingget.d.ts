import { SpeakeasyBase } from "../../../internal/utils";
export declare class CopyPadWithoutHistoryUsingGetQueryParams extends SpeakeasyBase {
    destinationId?: string;
    force?: string;
    sourceId?: string;
}
export declare class CopyPadWithoutHistoryUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CopyPadWithoutHistoryUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CopyPadWithoutHistoryUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CopyPadWithoutHistoryUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CopyPadWithoutHistoryUsingGetRequest extends SpeakeasyBase {
    queryParams: CopyPadWithoutHistoryUsingGetQueryParams;
}
export declare class CopyPadWithoutHistoryUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    copyPadWithoutHistoryUsingGet200ApplicationJsonObject?: CopyPadWithoutHistoryUsingGet200ApplicationJson;
    copyPadWithoutHistoryUsingGet400ApplicationJsonObject?: CopyPadWithoutHistoryUsingGet400ApplicationJson;
    copyPadWithoutHistoryUsingGet401ApplicationJsonObject?: CopyPadWithoutHistoryUsingGet401ApplicationJson;
    copyPadWithoutHistoryUsingGet500ApplicationJsonObject?: CopyPadWithoutHistoryUsingGet500ApplicationJson;
}
