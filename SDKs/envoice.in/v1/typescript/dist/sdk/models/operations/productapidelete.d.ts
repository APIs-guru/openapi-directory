import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProductApiDeleteHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ProductApiDeleteRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    productDeleteApiModel?: shared.ProductDeleteApiModel;
    productDeleteApiModel1?: shared.ProductDeleteApiModel;
    productDeleteApiModel2?: shared.ProductDeleteApiModel;
    textHtml: Uint8Array;
    textXml: Uint8Array;
}
export declare class ProductApiDeleteRequest extends SpeakeasyBase {
    headers: ProductApiDeleteHeaders;
    request: ProductApiDeleteRequests;
}
export declare class ProductApiDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    productApiDelete200ApplicationJsonInt32Integer?: number;
    productApiDelete200TextJsonInt32Integer?: number;
    statusCode: number;
}
