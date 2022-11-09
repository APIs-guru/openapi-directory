import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateProductPathParams extends SpeakeasyBase {
    productId: string;
}
export declare class UpdateProductRequests extends SpeakeasyBase {
    updateProductRequest?: shared.UpdateProductRequest;
    updateProductRequest1?: shared.UpdateProductRequest;
    updateProductRequest2?: shared.UpdateProductRequest;
}
export declare class UpdateProductRequest extends SpeakeasyBase {
    pathParams: UpdateProductPathParams;
    request: UpdateProductRequests;
}
export declare class UpdateProductResponse extends SpeakeasyBase {
    contentType: string;
    productModel?: shared.ProductModel;
    productModelHaljson?: shared.ProductModelHaljson;
    statusCode: number;
}
