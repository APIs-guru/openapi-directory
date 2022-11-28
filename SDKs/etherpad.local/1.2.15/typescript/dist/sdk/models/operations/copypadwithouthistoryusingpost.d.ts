import { SpeakeasyBase } from "../../../internal/utils";
export declare class CopyPadWithoutHistoryUsingPostQueryParams extends SpeakeasyBase {
    destinationId?: string;
    force?: string;
    sourceId?: string;
}
export declare class CopyPadWithoutHistoryUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CopyPadWithoutHistoryUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CopyPadWithoutHistoryUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CopyPadWithoutHistoryUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class CopyPadWithoutHistoryUsingPostRequest extends SpeakeasyBase {
    queryParams: CopyPadWithoutHistoryUsingPostQueryParams;
}
export declare class CopyPadWithoutHistoryUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    copyPadWithoutHistoryUsingPost200ApplicationJsonObject?: CopyPadWithoutHistoryUsingPost200ApplicationJson;
    copyPadWithoutHistoryUsingPost400ApplicationJsonObject?: CopyPadWithoutHistoryUsingPost400ApplicationJson;
    copyPadWithoutHistoryUsingPost401ApplicationJsonObject?: CopyPadWithoutHistoryUsingPost401ApplicationJson;
    copyPadWithoutHistoryUsingPost500ApplicationJsonObject?: CopyPadWithoutHistoryUsingPost500ApplicationJson;
}
