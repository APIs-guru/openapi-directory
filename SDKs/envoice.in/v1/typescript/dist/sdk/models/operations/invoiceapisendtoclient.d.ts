import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvoiceApiSendToClientHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiSendToClientRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    sendInvoiceToClientApiModel?: shared.SendInvoiceToClientApiModel;
    sendInvoiceToClientApiModel1?: shared.SendInvoiceToClientApiModel;
    sendInvoiceToClientApiModel2?: shared.SendInvoiceToClientApiModel;
    textHtml: Uint8Array;
    textXml: Uint8Array;
}
export declare class InvoiceApiSendToClientRequest extends SpeakeasyBase {
    headers: InvoiceApiSendToClientHeaders;
    request: InvoiceApiSendToClientRequests;
}
export declare class InvoiceApiSendToClientResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    invoiceApiSendToClient200ApplicationJsonInt32Integer?: number;
    invoiceApiSendToClient200TextJsonInt32Integer?: number;
    statusCode: number;
}
