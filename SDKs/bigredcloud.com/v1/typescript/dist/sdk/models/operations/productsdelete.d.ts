import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProductsDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class ProductsDeleteQueryParams extends SpeakeasyBase {
    timestamp: string;
}
export declare class ProductsDeleteRequest extends SpeakeasyBase {
    pathParams: ProductsDeletePathParams;
    queryParams: ProductsDeleteQueryParams;
}
export declare class ProductsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    productsDelete200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
