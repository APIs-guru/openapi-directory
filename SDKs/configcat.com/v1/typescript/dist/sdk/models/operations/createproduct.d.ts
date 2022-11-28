import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProductPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class CreateProductRequests extends SpeakeasyBase {
    createProductRequest?: shared.CreateProductRequest;
    createProductRequest1?: shared.CreateProductRequest;
    createProductRequest2?: shared.CreateProductRequest;
}
export declare class CreateProductRequest extends SpeakeasyBase {
    pathParams: CreateProductPathParams;
    request: CreateProductRequests;
}
export declare class CreateProductResponse extends SpeakeasyBase {
    contentType: string;
    productModel?: shared.ProductModel;
    productModelHaljson?: shared.ProductModelHaljson;
    statusCode: number;
}
