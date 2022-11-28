import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiInvoiceNewcategoryHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class PostApiInvoiceNewcategoryRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    invoiceCategoryCreateApiModel?: shared.InvoiceCategoryCreateApiModel;
    invoiceCategoryCreateApiModel1?: shared.InvoiceCategoryCreateApiModel;
    invoiceCategoryCreateApiModel2?: shared.InvoiceCategoryCreateApiModel;
    textHtml: Uint8Array;
    textXml: Uint8Array;
}
export declare class PostApiInvoiceNewcategoryRequest extends SpeakeasyBase {
    headers: PostApiInvoiceNewcategoryHeaders;
    request: PostApiInvoiceNewcategoryRequests;
}
export declare class PostApiInvoiceNewcategoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    invoiceCategoryApiModel?: shared.InvoiceCategoryApiModel;
    statusCode: number;
}
