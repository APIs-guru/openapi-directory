import { SpeakeasyBase } from "../../../internal/utils";
export declare class InvoiceApiStatusQueryParams extends SpeakeasyBase {
    id: number;
}
export declare class InvoiceApiStatusHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare enum InvoiceApiStatus200ApplicationJsonEnum {
    Draft = "Draft",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    Void = "Void"
}
export declare enum InvoiceApiStatus200TextJsonEnum {
    Draft = "Draft",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    Void = "Void"
}
export declare class InvoiceApiStatusRequest extends SpeakeasyBase {
    queryParams: InvoiceApiStatusQueryParams;
    headers: InvoiceApiStatusHeaders;
}
export declare class InvoiceApiStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    invoiceApiStatus200ApplicationJsonStringEnum?: InvoiceApiStatus200ApplicationJsonEnum;
    invoiceApiStatus200TextJsonStringEnum?: InvoiceApiStatus200TextJsonEnum;
    statusCode: number;
}
