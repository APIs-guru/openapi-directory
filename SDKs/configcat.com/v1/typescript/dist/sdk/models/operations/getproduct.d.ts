import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetProductPathParams extends SpeakeasyBase {
    productId: string;
}
export declare class GetProductRequest extends SpeakeasyBase {
    pathParams: GetProductPathParams;
}
export declare class GetProductResponse extends SpeakeasyBase {
    contentType: string;
    productModel?: shared.ProductModel;
    productModelHaljson?: shared.ProductModelHaljson;
    statusCode: number;
}
