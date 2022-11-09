import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LinkedInvoiceItem } from "./linkedinvoiceitem";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { LinkedTaxRate } from "./linkedtaxrate";

export enum BillLineItemTypeEnum {
    ExpenseItem = "expense_item"
,    ExpenseAccount = "expense_account"
}


export class BillLineItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=discount_percentage" })
  discountPercentage?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=item" })
  item?: LinkedInvoiceItem;

  @Metadata({ data: "json, name=ledger_account" })
  ledgerAccount?: LinkedLedgerAccount;

  @Metadata({ data: "json, name=line_number" })
  lineNumber?: number;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=row_id" })
  rowId?: string;

  @Metadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @Metadata({ data: "json, name=tax_amount" })
  taxAmount?: number;

  @Metadata({ data: "json, name=tax_rate" })
  taxRate?: LinkedTaxRate;

  @Metadata({ data: "json, name=total_amount" })
  totalAmount?: number;

  @Metadata({ data: "json, name=type" })
  type?: BillLineItemTypeEnum;

  @Metadata({ data: "json, name=unit_of_measure" })
  unitOfMeasure?: string;

  @Metadata({ data: "json, name=unit_price" })
  unitPrice?: number;
}
