import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProductCatalogPathParams extends SpeakeasyBase {
    country: string;
}
export declare class ProductCatalogSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class ProductCatalogRequest extends SpeakeasyBase {
    pathParams: ProductCatalogPathParams;
    security: ProductCatalogSecurity;
}
export declare class ProductCatalogResponse extends SpeakeasyBase {
    contentType: string;
    productCatalog200ApplicationJsonAny?: any;
    productCatalogDefaultApplicationJsonAny?: any;
    statusCode: number;
}
