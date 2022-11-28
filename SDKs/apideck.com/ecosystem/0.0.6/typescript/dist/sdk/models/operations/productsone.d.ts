import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProductsOnePathParams extends SpeakeasyBase {
    ecosystemId: string;
    id: string;
}
export declare class ProductsOneRequest extends SpeakeasyBase {
    pathParams: ProductsOnePathParams;
}
export declare class ProductsOneResponse extends SpeakeasyBase {
    contentType: string;
    getProductResponse?: shared.GetProductResponse;
    statusCode: number;
}
