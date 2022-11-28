import { SpeakeasyBase } from "../../../internal/utils";
export declare class SuppliersDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class SuppliersDeleteQueryParams extends SpeakeasyBase {
    timestamp: string;
}
export declare class SuppliersDeleteRequest extends SpeakeasyBase {
    pathParams: SuppliersDeletePathParams;
    queryParams: SuppliersDeleteQueryParams;
}
export declare class SuppliersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    suppliersDelete200ApplicationJsonObject?: Map<string, any>;
}
