import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiInvoiceUpdatecategoryHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class PostApiInvoiceUpdatecategoryRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    invoiceCategoryUpdateApiModel?: shared.InvoiceCategoryUpdateApiModel;
    invoiceCategoryUpdateApiModel1?: shared.InvoiceCategoryUpdateApiModel;
    invoiceCategoryUpdateApiModel2?: shared.InvoiceCategoryUpdateApiModel;
    textHtml: Uint8Array;
    textXml: Uint8Array;
}
export declare class PostApiInvoiceUpdatecategoryRequest extends SpeakeasyBase {
    headers: PostApiInvoiceUpdatecategoryHeaders;
    request: PostApiInvoiceUpdatecategoryRequests;
}
export declare class PostApiInvoiceUpdatecategoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    invoiceCategoryApiModel?: shared.InvoiceCategoryApiModel;
    statusCode: number;
}
