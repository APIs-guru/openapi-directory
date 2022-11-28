import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV1ProductsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetV1ProductsIdRequest extends SpeakeasyBase {
    pathParams: GetV1ProductsIdPathParams;
}
export declare class GetV1ProductsIdResponse extends SpeakeasyBase {
    contentType: string;
    productDto?: shared.ProductDto;
    statusCode: number;
}
