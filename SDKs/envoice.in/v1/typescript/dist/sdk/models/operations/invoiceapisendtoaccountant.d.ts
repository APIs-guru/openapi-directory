import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvoiceApiSendToAccountantHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiSendToAccountantRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    sendInvoiceToAccountantApiModel?: shared.SendInvoiceToAccountantApiModel;
    sendInvoiceToAccountantApiModel1?: shared.SendInvoiceToAccountantApiModel;
    sendInvoiceToAccountantApiModel2?: shared.SendInvoiceToAccountantApiModel;
    textHtml: Uint8Array;
    textXml: Uint8Array;
}
export declare class InvoiceApiSendToAccountantRequest extends SpeakeasyBase {
    headers: InvoiceApiSendToAccountantHeaders;
    request: InvoiceApiSendToAccountantRequests;
}
export declare class InvoiceApiSendToAccountantResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    invoiceApiSendToAccountant200ApplicationJsonInt32Integer?: number;
    invoiceApiSendToAccountant200TextJsonInt32Integer?: number;
    statusCode: number;
}
