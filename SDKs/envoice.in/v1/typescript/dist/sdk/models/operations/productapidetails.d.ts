import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProductApiDetailsQueryParams extends SpeakeasyBase {
    id: number;
}
export declare class ProductApiDetailsHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ProductApiDetailsRequest extends SpeakeasyBase {
    queryParams: ProductApiDetailsQueryParams;
    headers: ProductApiDetailsHeaders;
}
export declare class ProductApiDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    productFullDetailsApiModel?: shared.ProductFullDetailsApiModel;
    statusCode: number;
}
