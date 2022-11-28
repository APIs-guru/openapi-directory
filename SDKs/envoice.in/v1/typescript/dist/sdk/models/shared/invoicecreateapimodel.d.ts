import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceCreateAttachmentApiModel } from "./invoicecreateattachmentapimodel";
import { InvoiceCreateItemApiModel } from "./invoicecreateitemapimodel";
import { InvoiceGatewayApiModel } from "./invoicegatewayapimodel";
import { InvoiceRecurringApiModel } from "./invoicerecurringapimodel";
export declare enum InvoiceCreateApiModelStatusEnum {
    Draft = "Draft",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    Void = "Void"
}
export declare class InvoiceCreateApiModel extends SpeakeasyBase {
    attachments?: InvoiceCreateAttachmentApiModel[];
    clientId?: number;
    clonedFromId?: number;
    currencyId?: number;
    duedate?: Date;
    invoiceCategoryId?: number;
    issuedOn?: Date;
    items?: InvoiceCreateItemApiModel[];
    notes?: string;
    number?: string;
    paymentGateways?: InvoiceGatewayApiModel[];
    poNumber?: string;
    recurringProfile?: InvoiceRecurringApiModel;
    recurringProfileId?: number;
    shouldSendReminders?: boolean;
    status?: InvoiceCreateApiModelStatusEnum;
    terms?: string;
}
