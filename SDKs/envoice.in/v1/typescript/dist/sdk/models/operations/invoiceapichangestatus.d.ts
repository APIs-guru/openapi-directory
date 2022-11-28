import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvoiceApiChangeStatusHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiChangeStatusRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    changeStatusApiModel?: shared.ChangeStatusApiModel;
    changeStatusApiModel1?: shared.ChangeStatusApiModel;
    changeStatusApiModel2?: shared.ChangeStatusApiModel;
    textHtml: Uint8Array;
    textXml: Uint8Array;
}
export declare class InvoiceApiChangeStatusRequest extends SpeakeasyBase {
    headers: InvoiceApiChangeStatusHeaders;
    request: InvoiceApiChangeStatusRequests;
}
export declare class InvoiceApiChangeStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    invoiceApiChangeStatus200ApplicationJsonBoolean?: boolean;
    invoiceApiChangeStatus200TextJsonBoolean?: boolean;
    statusCode: number;
}
