import { SpeakeasyBase } from "../../../internal/utils";
import { LinkedInvoiceItem } from "./linkedinvoiceitem";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { LinkedTaxRate } from "./linkedtaxrate";
import { LinkedInvoiceItemInput } from "./linkedinvoiceitem";
import { LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { LinkedTaxRateInput } from "./linkedtaxrate";
export declare enum BillLineItemTypeEnum {
    ExpenseItem = "expense_item",
    ExpenseAccount = "expense_account"
}
export declare class BillLineItem extends SpeakeasyBase {
    code?: string;
    createdAt?: Date;
    createdBy?: string;
    departmentId?: string;
    description?: string;
    discountPercentage?: number;
    id?: string;
    item?: LinkedInvoiceItem;
    ledgerAccount?: LinkedLedgerAccount;
    lineNumber?: number;
    locationId?: string;
    quantity?: number;
    rowId?: string;
    rowVersion?: string;
    taxAmount?: number;
    taxRate?: LinkedTaxRate;
    totalAmount?: number;
    type?: BillLineItemTypeEnum;
    unitOfMeasure?: string;
    unitPrice?: number;
    updatedAt?: Date;
    updatedBy?: string;
}
export declare class BillLineItemInput extends SpeakeasyBase {
    code?: string;
    departmentId?: string;
    description?: string;
    discountPercentage?: number;
    item?: LinkedInvoiceItemInput;
    ledgerAccount?: LinkedLedgerAccountInput;
    lineNumber?: number;
    locationId?: string;
    quantity?: number;
    rowId?: string;
    rowVersion?: string;
    taxAmount?: number;
    taxRate?: LinkedTaxRateInput;
    totalAmount?: number;
    type?: BillLineItemTypeEnum;
    unitOfMeasure?: string;
    unitPrice?: number;
}
