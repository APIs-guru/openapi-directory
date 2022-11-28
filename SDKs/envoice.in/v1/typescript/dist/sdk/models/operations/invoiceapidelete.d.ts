import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvoiceApiDeleteHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiDeleteRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    invoiceDeleteApiModel?: shared.InvoiceDeleteApiModel;
    invoiceDeleteApiModel1?: shared.InvoiceDeleteApiModel;
    invoiceDeleteApiModel2?: shared.InvoiceDeleteApiModel;
    textHtml: Uint8Array;
    textXml: Uint8Array;
}
export declare class InvoiceApiDeleteRequest extends SpeakeasyBase {
    headers: InvoiceApiDeleteHeaders;
    request: InvoiceApiDeleteRequests;
}
export declare class InvoiceApiDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    invoiceApiDelete200ApplicationJsonInt32Integer?: number;
    invoiceApiDelete200TextJsonInt32Integer?: number;
    statusCode: number;
}
