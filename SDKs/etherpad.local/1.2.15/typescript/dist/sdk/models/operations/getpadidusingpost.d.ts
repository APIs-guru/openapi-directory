import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPadIdUsingPostQueryParams extends SpeakeasyBase {
    roId?: string;
}
export declare class GetPadIdUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetPadIdUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetPadIdUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetPadIdUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetPadIdUsingPostRequest extends SpeakeasyBase {
    queryParams: GetPadIdUsingPostQueryParams;
}
export declare class GetPadIdUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPadIdUsingPost200ApplicationJsonObject?: GetPadIdUsingPost200ApplicationJson;
    getPadIdUsingPost400ApplicationJsonObject?: GetPadIdUsingPost400ApplicationJson;
    getPadIdUsingPost401ApplicationJsonObject?: GetPadIdUsingPost401ApplicationJson;
    getPadIdUsingPost500ApplicationJsonObject?: GetPadIdUsingPost500ApplicationJson;
}
