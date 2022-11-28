import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { BillLineItemInput } from "./billlineitem";
import { LinkedSupplierInput } from "./linkedsupplier";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { BillLineItem } from "./billlineitem";
import { LinkedSupplier } from "./linkedsupplier";
export declare enum BillStatusEnum {
    Draft = "draft",
    Submitted = "submitted",
    Authorised = "authorised",
    PartiallyPaid = "partially_paid",
    Paid = "paid",
    Void = "void",
    Credit = "credit",
    Deleted = "deleted"
}
export declare class BillInput extends SpeakeasyBase {
    balance?: number;
    billDate?: Date;
    billNumber?: string;
    currency?: CurrencyEnum;
    currencyRate?: number;
    deposit?: number;
    dueDate?: Date;
    ledgerAccount?: LinkedLedgerAccountInput;
    lineItems?: BillLineItemInput[];
    notes?: string;
    paidDate?: Date;
    poNumber?: string;
    reference?: string;
    rowVersion?: string;
    status?: BillStatusEnum;
    subTotal?: number;
    supplier?: LinkedSupplierInput;
    taxCode?: string;
    taxInclusive?: boolean;
    terms?: string;
    total?: number;
    totalTax?: number;
}
export declare class Bill extends SpeakeasyBase {
    balance?: number;
    billDate?: Date;
    billNumber?: string;
    createdAt?: Date;
    createdBy?: string;
    currency?: CurrencyEnum;
    currencyRate?: number;
    deposit?: number;
    downstreamId?: string;
    dueDate?: Date;
    id?: string;
    ledgerAccount?: LinkedLedgerAccount;
    lineItems?: BillLineItem[];
    notes?: string;
    paidDate?: Date;
    poNumber?: string;
    reference?: string;
    rowVersion?: string;
    status?: BillStatusEnum;
    subTotal?: number;
    supplier?: LinkedSupplier;
    taxCode?: string;
    taxInclusive?: boolean;
    terms?: string;
    total?: number;
    totalTax?: number;
    updatedAt?: Date;
    updatedBy?: string;
}
