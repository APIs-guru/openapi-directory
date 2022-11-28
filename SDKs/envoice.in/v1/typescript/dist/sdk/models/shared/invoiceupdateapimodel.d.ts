import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceUpdateAttachmentApiModel } from "./invoiceupdateattachmentapimodel";
import { InvoiceUpdateItemApiModel } from "./invoiceupdateitemapimodel";
import { InvoiceGatewayApiModel } from "./invoicegatewayapimodel";
import { InvoiceRecurringApiModel } from "./invoicerecurringapimodel";
export declare enum InvoiceUpdateApiModelStatusEnum {
    Draft = "Draft",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    Void = "Void"
}
export declare class InvoiceUpdateApiModel extends SpeakeasyBase {
    attachments?: InvoiceUpdateAttachmentApiModel[];
    clientId?: number;
    clonedFromId?: number;
    currencyId?: number;
    duedate?: Date;
    id?: number;
    invoiceCategoryId?: number;
    issuedOn?: Date;
    items?: InvoiceUpdateItemApiModel[];
    notes?: string;
    number?: string;
    paymentGateways?: InvoiceGatewayApiModel[];
    poNumber?: string;
    recurringProfile?: InvoiceRecurringApiModel;
    recurringProfileId?: number;
    shouldSendReminders?: boolean;
    status?: InvoiceUpdateApiModelStatusEnum;
    terms?: string;
}
