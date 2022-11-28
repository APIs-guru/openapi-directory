import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiInvoiceDeletecategoryHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class PostApiInvoiceDeletecategoryRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    invoiceCategoryDeleteApiModel?: shared.InvoiceCategoryDeleteApiModel;
    invoiceCategoryDeleteApiModel1?: shared.InvoiceCategoryDeleteApiModel;
    invoiceCategoryDeleteApiModel2?: shared.InvoiceCategoryDeleteApiModel;
    textHtml: Uint8Array;
    textXml: Uint8Array;
}
export declare class PostApiInvoiceDeletecategoryRequest extends SpeakeasyBase {
    headers: PostApiInvoiceDeletecategoryHeaders;
    request: PostApiInvoiceDeletecategoryRequests;
}
export declare class PostApiInvoiceDeletecategoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    postApiInvoiceDeletecategory200ApplicationJsonInt32Integer?: number;
    postApiInvoiceDeletecategory200TextJsonInt32Integer?: number;
    statusCode: number;
}
