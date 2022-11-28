import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductPathParams extends SpeakeasyBase {
    epid: string;
}
export declare class GetProductSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetProductRequest extends SpeakeasyBase {
    pathParams: GetProductPathParams;
    security: GetProductSecurity;
}
export declare class GetProductResponse extends SpeakeasyBase {
    contentType: string;
    product?: shared.Product;
    statusCode: number;
}
