import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPublicStatusUsingPostQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class GetPublicStatusUsingPost200ApplicationJsonData extends SpeakeasyBase {
    publicStatus?: boolean;
}
export declare class GetPublicStatusUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetPublicStatusUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class GetPublicStatusUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetPublicStatusUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetPublicStatusUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetPublicStatusUsingPostRequest extends SpeakeasyBase {
    queryParams: GetPublicStatusUsingPostQueryParams;
}
export declare class GetPublicStatusUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPublicStatusUsingPost200ApplicationJsonObject?: GetPublicStatusUsingPost200ApplicationJson;
    getPublicStatusUsingPost400ApplicationJsonObject?: GetPublicStatusUsingPost400ApplicationJson;
    getPublicStatusUsingPost401ApplicationJsonObject?: GetPublicStatusUsingPost401ApplicationJson;
    getPublicStatusUsingPost500ApplicationJsonObject?: GetPublicStatusUsingPost500ApplicationJson;
}
