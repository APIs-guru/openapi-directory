import { SpeakeasyBase } from "../../../internal/utils";
import { ClientDetailsApiModel } from "./clientdetailsapimodel";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { InvoiceRecurringApiModel } from "./invoicerecurringapimodel";
export declare enum InvoiceDetailsApiModelStatusEnum {
    Draft = "Draft",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    Void = "Void"
}
export declare class InvoiceDetailsApiModel extends SpeakeasyBase {
    accessToken?: string;
    client?: ClientDetailsApiModel;
    clonedFromId?: number;
    currency?: CurrencyDetailsApiModel;
    discountAmount?: number;
    duedate?: Date;
    enablePartialPayments?: boolean;
    id?: number;
    invoiceCategoryId?: number;
    issuedOn?: Date;
    notes?: string;
    number?: string;
    poNumber?: string;
    recurringProfile?: InvoiceRecurringApiModel;
    recurringProfileId?: number;
    shouldSendReminders?: boolean;
    status?: InvoiceDetailsApiModelStatusEnum;
    subTotalAmount?: number;
    taxAmount?: number;
    terms?: string;
    totalAmount?: number;
}
