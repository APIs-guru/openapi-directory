import { SpeakeasyBase } from "../../../internal/utils";
import { LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { LinkedTaxRateInput } from "./linkedtaxrate";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { LinkedTaxRate } from "./linkedtaxrate";
export declare class InvoiceItemPurchaseDetailsInput extends SpeakeasyBase {
    taxInclusive?: boolean;
    taxRate?: LinkedTaxRateInput;
    unitOfMeasure?: string;
    unitPrice?: number;
}
export declare class InvoiceItemSalesDetailsInput extends SpeakeasyBase {
    taxInclusive?: boolean;
    taxRate?: LinkedTaxRateInput;
    unitOfMeasure?: string;
    unitPrice?: number;
}
export declare class InvoiceItemPurchaseDetails extends SpeakeasyBase {
    taxInclusive?: boolean;
    taxRate?: LinkedTaxRate;
    unitOfMeasure?: string;
    unitPrice?: number;
}
export declare class InvoiceItemSalesDetails extends SpeakeasyBase {
    taxInclusive?: boolean;
    taxRate?: LinkedTaxRate;
    unitOfMeasure?: string;
    unitPrice?: number;
}
export declare enum InvoiceItemTypeEnum {
    Inventory = "inventory",
    Service = "service",
    Other = "other"
}
export declare class InvoiceItemInput extends SpeakeasyBase {
    active?: boolean;
    assetAccount?: LinkedLedgerAccountInput;
    code?: string;
    description?: string;
    expenseAccount?: LinkedLedgerAccountInput;
    incomeAccount?: LinkedLedgerAccountInput;
    inventoryDate?: Date;
    name?: string;
    purchaseDetails?: InvoiceItemPurchaseDetailsInput;
    purchased?: boolean;
    quantity?: number;
    rowVersion?: string;
    salesDetails?: InvoiceItemSalesDetailsInput;
    sold?: boolean;
    tracked?: boolean;
    type?: InvoiceItemTypeEnum;
    unitPrice?: number;
}
export declare class InvoiceItem extends SpeakeasyBase {
    active?: boolean;
    assetAccount?: LinkedLedgerAccount;
    code?: string;
    createdAt?: Date;
    createdBy?: string;
    description?: string;
    expenseAccount?: LinkedLedgerAccount;
    id?: string;
    incomeAccount?: LinkedLedgerAccount;
    inventoryDate?: Date;
    name?: string;
    purchaseDetails?: InvoiceItemPurchaseDetails;
    purchased?: boolean;
    quantity?: number;
    rowVersion?: string;
    salesDetails?: InvoiceItemSalesDetails;
    sold?: boolean;
    tracked?: boolean;
    type?: InvoiceItemTypeEnum;
    unitPrice?: number;
    updatedAt?: Date;
    updatedBy?: string;
}
