import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetReadOnlyIdUsingPostQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class GetReadOnlyIdUsingPost200ApplicationJsonData extends SpeakeasyBase {
    readOnlyId?: string;
}
export declare class GetReadOnlyIdUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetReadOnlyIdUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class GetReadOnlyIdUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetReadOnlyIdUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetReadOnlyIdUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetReadOnlyIdUsingPostRequest extends SpeakeasyBase {
    queryParams: GetReadOnlyIdUsingPostQueryParams;
}
export declare class GetReadOnlyIdUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getReadOnlyIdUsingPost200ApplicationJsonObject?: GetReadOnlyIdUsingPost200ApplicationJson;
    getReadOnlyIdUsingPost400ApplicationJsonObject?: GetReadOnlyIdUsingPost400ApplicationJson;
    getReadOnlyIdUsingPost401ApplicationJsonObject?: GetReadOnlyIdUsingPost401ApplicationJson;
    getReadOnlyIdUsingPost500ApplicationJsonObject?: GetReadOnlyIdUsingPost500ApplicationJson;
}
