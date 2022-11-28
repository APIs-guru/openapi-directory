import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAttributePoolUsingPostQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class GetAttributePoolUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetAttributePoolUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetAttributePoolUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetAttributePoolUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class GetAttributePoolUsingPostRequest extends SpeakeasyBase {
    queryParams: GetAttributePoolUsingPostQueryParams;
}
export declare class GetAttributePoolUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAttributePoolUsingPost200ApplicationJsonObject?: GetAttributePoolUsingPost200ApplicationJson;
    getAttributePoolUsingPost400ApplicationJsonObject?: GetAttributePoolUsingPost400ApplicationJson;
    getAttributePoolUsingPost401ApplicationJsonObject?: GetAttributePoolUsingPost401ApplicationJson;
    getAttributePoolUsingPost500ApplicationJsonObject?: GetAttributePoolUsingPost500ApplicationJson;
}
