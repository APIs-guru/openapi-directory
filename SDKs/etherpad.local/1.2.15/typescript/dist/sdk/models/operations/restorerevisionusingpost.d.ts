import { SpeakeasyBase } from "../../../internal/utils";
export declare class RestoreRevisionUsingPostQueryParams extends SpeakeasyBase {
    padId?: string;
    rev?: string;
}
export declare class RestoreRevisionUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class RestoreRevisionUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class RestoreRevisionUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class RestoreRevisionUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class RestoreRevisionUsingPostRequest extends SpeakeasyBase {
    queryParams: RestoreRevisionUsingPostQueryParams;
}
export declare class RestoreRevisionUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    restoreRevisionUsingPost200ApplicationJsonObject?: RestoreRevisionUsingPost200ApplicationJson;
    restoreRevisionUsingPost400ApplicationJsonObject?: RestoreRevisionUsingPost400ApplicationJson;
    restoreRevisionUsingPost401ApplicationJsonObject?: RestoreRevisionUsingPost401ApplicationJson;
    restoreRevisionUsingPost500ApplicationJsonObject?: RestoreRevisionUsingPost500ApplicationJson;
}
