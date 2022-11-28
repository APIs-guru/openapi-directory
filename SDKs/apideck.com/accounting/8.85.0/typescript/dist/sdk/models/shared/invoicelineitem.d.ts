import { SpeakeasyBase } from "../../../internal/utils";
import { LinkedInvoiceItemInput } from "./linkedinvoiceitem";
import { LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { LinkedTaxRateInput } from "./linkedtaxrate";
import { LinkedInvoiceItem } from "./linkedinvoiceitem";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { LinkedTaxRate } from "./linkedtaxrate";
export declare enum InvoiceLineItemTypeEnum {
    SalesItem = "sales_item",
    Discount = "discount",
    Info = "info",
    SubTotal = "sub_total"
}
export declare class InvoiceLineItemInput extends SpeakeasyBase {
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
    type?: InvoiceLineItemTypeEnum;
    unitOfMeasure?: string;
    unitPrice?: number;
}
export declare class InvoiceLineItem extends SpeakeasyBase {
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
    type?: InvoiceLineItemTypeEnum;
    unitOfMeasure?: string;
    unitPrice?: number;
    updatedAt?: Date;
    updatedBy?: string;
}
