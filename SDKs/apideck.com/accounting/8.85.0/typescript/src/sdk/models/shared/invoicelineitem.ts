import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinkedInvoiceItemInput } from "./linkedinvoiceitem";
import { LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { LinkedTaxRateInput } from "./linkedtaxrate";
import { LinkedInvoiceItem } from "./linkedinvoiceitem";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { LinkedTaxRate } from "./linkedtaxrate";


export enum InvoiceLineItemTypeEnum {
    SalesItem = "sales_item",
    Discount = "discount",
    Info = "info",
    SubTotal = "sub_total"
}


export class InvoiceLineItemInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=department_id" })
  departmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discount_percentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: LinkedInvoiceItemInput;

  @SpeakeasyMetadata({ data: "json, name=ledger_account" })
  ledgerAccount?: LinkedLedgerAccountInput;

  @SpeakeasyMetadata({ data: "json, name=line_number" })
  lineNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=location_id" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=row_id" })
  rowId?: string;

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_amount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=tax_rate" })
  taxRate?: LinkedTaxRateInput;

  @SpeakeasyMetadata({ data: "json, name=total_amount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: InvoiceLineItemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=unit_of_measure" })
  unitOfMeasure?: string;

  @SpeakeasyMetadata({ data: "json, name=unit_price" })
  unitPrice?: number;
}


export class InvoiceLineItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=department_id" })
  departmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discount_percentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: LinkedInvoiceItem;

  @SpeakeasyMetadata({ data: "json, name=ledger_account" })
  ledgerAccount?: LinkedLedgerAccount;

  @SpeakeasyMetadata({ data: "json, name=line_number" })
  lineNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=location_id" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=row_id" })
  rowId?: string;

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_amount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=tax_rate" })
  taxRate?: LinkedTaxRate;

  @SpeakeasyMetadata({ data: "json, name=total_amount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: InvoiceLineItemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=unit_of_measure" })
  unitOfMeasure?: string;

  @SpeakeasyMetadata({ data: "json, name=unit_price" })
  unitPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
