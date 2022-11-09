import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { LinkedTaxRate } from "./linkedtaxrate";
import { LinkedTaxRate } from "./linkedtaxrate";


export class InvoiceItemPurchaseDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=tax_inclusive" })
  taxInclusive?: boolean;

  @Metadata({ data: "json, name=tax_rate" })
  taxRate?: LinkedTaxRate;

  @Metadata({ data: "json, name=unit_of_measure" })
  unitOfMeasure?: string;

  @Metadata({ data: "json, name=unit_price" })
  unitPrice?: number;
}


export class InvoiceItemSalesDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=tax_inclusive" })
  taxInclusive?: boolean;

  @Metadata({ data: "json, name=tax_rate" })
  taxRate?: LinkedTaxRate;

  @Metadata({ data: "json, name=unit_of_measure" })
  unitOfMeasure?: string;

  @Metadata({ data: "json, name=unit_price" })
  unitPrice?: number;
}

export enum InvoiceItemTypeEnum {
    Inventory = "inventory"
,    Service = "service"
,    Other = "other"
}


export class InvoiceItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=asset_account" })
  assetAccount?: LinkedLedgerAccount;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=expense_account" })
  expenseAccount?: LinkedLedgerAccount;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=income_account" })
  incomeAccount?: LinkedLedgerAccount;

  @Metadata({ data: "json, name=inventory_date" })
  inventoryDate?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=purchase_details" })
  purchaseDetails?: InvoiceItemPurchaseDetails;

  @Metadata({ data: "json, name=purchased" })
  purchased?: boolean;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @Metadata({ data: "json, name=sales_details" })
  salesDetails?: InvoiceItemSalesDetails;

  @Metadata({ data: "json, name=sold" })
  sold?: boolean;

  @Metadata({ data: "json, name=tracked" })
  tracked?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: InvoiceItemTypeEnum;

  @Metadata({ data: "json, name=unit_price" })
  unitPrice?: number;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
