import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { LinkedTaxRateInput } from "./linkedtaxrate";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { LinkedTaxRate } from "./linkedtaxrate";



export class InvoiceItemPurchaseDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tax_inclusive" })
  taxInclusive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tax_rate" })
  taxRate?: LinkedTaxRateInput;

  @SpeakeasyMetadata({ data: "json, name=unit_of_measure" })
  unitOfMeasure?: string;

  @SpeakeasyMetadata({ data: "json, name=unit_price" })
  unitPrice?: number;
}


export class InvoiceItemSalesDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tax_inclusive" })
  taxInclusive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tax_rate" })
  taxRate?: LinkedTaxRateInput;

  @SpeakeasyMetadata({ data: "json, name=unit_of_measure" })
  unitOfMeasure?: string;

  @SpeakeasyMetadata({ data: "json, name=unit_price" })
  unitPrice?: number;
}


export class InvoiceItemPurchaseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tax_inclusive" })
  taxInclusive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tax_rate" })
  taxRate?: LinkedTaxRate;

  @SpeakeasyMetadata({ data: "json, name=unit_of_measure" })
  unitOfMeasure?: string;

  @SpeakeasyMetadata({ data: "json, name=unit_price" })
  unitPrice?: number;
}


export class InvoiceItemSalesDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tax_inclusive" })
  taxInclusive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tax_rate" })
  taxRate?: LinkedTaxRate;

  @SpeakeasyMetadata({ data: "json, name=unit_of_measure" })
  unitOfMeasure?: string;

  @SpeakeasyMetadata({ data: "json, name=unit_price" })
  unitPrice?: number;
}

export enum InvoiceItemTypeEnum {
    Inventory = "inventory",
    Service = "service",
    Other = "other"
}


export class InvoiceItemInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=asset_account" })
  assetAccount?: LinkedLedgerAccountInput;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expense_account" })
  expenseAccount?: LinkedLedgerAccountInput;

  @SpeakeasyMetadata({ data: "json, name=income_account" })
  incomeAccount?: LinkedLedgerAccountInput;

  @SpeakeasyMetadata({ data: "json, name=inventory_date" })
  inventoryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=purchase_details" })
  purchaseDetails?: InvoiceItemPurchaseDetailsInput;

  @SpeakeasyMetadata({ data: "json, name=purchased" })
  purchased?: boolean;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=sales_details" })
  salesDetails?: InvoiceItemSalesDetailsInput;

  @SpeakeasyMetadata({ data: "json, name=sold" })
  sold?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tracked" })
  tracked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: InvoiceItemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=unit_price" })
  unitPrice?: number;
}


export class InvoiceItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=asset_account" })
  assetAccount?: LinkedLedgerAccount;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expense_account" })
  expenseAccount?: LinkedLedgerAccount;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=income_account" })
  incomeAccount?: LinkedLedgerAccount;

  @SpeakeasyMetadata({ data: "json, name=inventory_date" })
  inventoryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=purchase_details" })
  purchaseDetails?: InvoiceItemPurchaseDetails;

  @SpeakeasyMetadata({ data: "json, name=purchased" })
  purchased?: boolean;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=sales_details" })
  salesDetails?: InvoiceItemSalesDetails;

  @SpeakeasyMetadata({ data: "json, name=sold" })
  sold?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tracked" })
  tracked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: InvoiceItemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=unit_price" })
  unitPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
