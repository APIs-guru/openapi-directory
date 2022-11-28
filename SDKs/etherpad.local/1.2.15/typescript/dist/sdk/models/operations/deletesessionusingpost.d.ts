import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSessionUsingPostQueryParams extends SpeakeasyBase {
    sessionId?: string;
}
export declare class DeleteSessionUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeleteSessionUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeleteSessionUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeleteSessionUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class DeleteSessionUsingPostRequest extends SpeakeasyBase {
    queryParams: DeleteSessionUsingPostQueryParams;
}
export declare class DeleteSessionUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteSessionUsingPost200ApplicationJsonObject?: DeleteSessionUsingPost200ApplicationJson;
    deleteSessionUsingPost400ApplicationJsonObject?: DeleteSessionUsingPost400ApplicationJson;
    deleteSessionUsingPost401ApplicationJsonObject?: DeleteSessionUsingPost401ApplicationJson;
    deleteSessionUsingPost500ApplicationJsonObject?: DeleteSessionUsingPost500ApplicationJson;
}
