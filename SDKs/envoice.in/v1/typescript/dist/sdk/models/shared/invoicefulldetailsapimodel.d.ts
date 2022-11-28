import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceActivityApiModel } from "./invoiceactivityapimodel";
import { InvoiceAttachmentApiModel } from "./invoiceattachmentapimodel";
import { ClientDetailsApiModel } from "./clientdetailsapimodel";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { InvoiceItemApiModel } from "./invoiceitemapimodel";
import { InvoiceGatewayApiModel } from "./invoicegatewayapimodel";
import { InvoicePaymentApiModel } from "./invoicepaymentapimodel";
import { InvoiceRecurringApiModel } from "./invoicerecurringapimodel";
export declare enum InvoiceFullDetailsApiModelStatusEnum {
    Draft = "Draft",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    Void = "Void"
}
export declare class InvoiceFullDetailsApiModel extends SpeakeasyBase {
    accessToken?: string;
    activities?: InvoiceActivityApiModel[];
    attachments?: InvoiceAttachmentApiModel[];
    client?: ClientDetailsApiModel;
    clonedFromId?: number;
    currency?: CurrencyDetailsApiModel;
    discountAmount?: number;
    duedate?: Date;
    enablePartialPayments?: boolean;
    id?: number;
    invoiceCategoryId?: number;
    issuedOn?: Date;
    items?: InvoiceItemApiModel[];
    notes?: string;
    number?: string;
    paymentGateways?: InvoiceGatewayApiModel[];
    payments?: InvoicePaymentApiModel[];
    poNumber?: string;
    recurringProfile?: InvoiceRecurringApiModel;
    recurringProfileId?: number;
    shouldSendReminders?: boolean;
    status?: InvoiceFullDetailsApiModelStatusEnum;
    subTotalAmount?: number;
    taxAmount?: number;
    terms?: string;
    totalAmount?: number;
}
