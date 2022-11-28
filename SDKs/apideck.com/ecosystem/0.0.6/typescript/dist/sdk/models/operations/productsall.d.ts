import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProductsAllPathParams extends SpeakeasyBase {
    ecosystemId: string;
}
export declare class ProductsAllRequest extends SpeakeasyBase {
    pathParams: ProductsAllPathParams;
}
export declare class ProductsAllResponse extends SpeakeasyBase {
    contentType: string;
    getProductsResponse?: shared.GetProductsResponse;
    statusCode: number;
}
