import { SpeakeasyBase } from "../../../internal/utils";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { CurrencyEnum } from "./currencyenum";
import { LinkedCustomer } from "./linkedcustomer";
import { InvoiceLineItem } from "./invoicelineitem";
import { LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { LinkedCustomerInput } from "./linkedcustomer";
import { InvoiceLineItemInput } from "./invoicelineitem";
export declare enum CreditNoteCreditNoteStatusEnum {
    Draft = "draft",
    Authorised = "authorised",
    Paid = "paid",
    Voided = "voided",
    Deleted = "deleted"
}
export declare enum CreditNoteCreditNoteTypeEnum {
    AccountsReceivableCredit = "accounts_receivable_credit",
    AccountsPayableCredit = "accounts_payable_credit"
}
export declare class CreditNote extends SpeakeasyBase {
    account?: LinkedLedgerAccount;
    allocations?: any[];
    balance?: number;
    createdAt?: Date;
    createdBy?: string;
    currency?: CurrencyEnum;
    currencyRate?: number;
    customer?: LinkedCustomer;
    dateIssued?: Date;
    datePaid?: Date;
    id?: string;
    lineItems?: InvoiceLineItem[];
    note?: string;
    number?: string;
    reference?: string;
    remainingCredit?: number;
    rowVersion?: string;
    status?: CreditNoteCreditNoteStatusEnum;
    subTotal?: number;
    taxCode?: string;
    taxInclusive?: boolean;
    totalAmount: number;
    totalTax?: number;
    type?: CreditNoteCreditNoteTypeEnum;
    updatedAt?: Date;
    updatedBy?: string;
}
export declare class CreditNoteInput extends SpeakeasyBase {
    account?: LinkedLedgerAccountInput;
    allocations?: any[];
    balance?: number;
    currency?: CurrencyEnum;
    currencyRate?: number;
    customer?: LinkedCustomerInput;
    dateIssued?: Date;
    datePaid?: Date;
    lineItems?: InvoiceLineItemInput[];
    note?: string;
    number?: string;
    reference?: string;
    remainingCredit?: number;
    rowVersion?: string;
    status?: CreditNoteCreditNoteStatusEnum;
    subTotal?: number;
    taxCode?: string;
    taxInclusive?: boolean;
    totalAmount: number;
    totalTax?: number;
    type?: CreditNoteCreditNoteTypeEnum;
}
