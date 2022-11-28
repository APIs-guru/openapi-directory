import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { BillLineItemInput } from "./billlineitem";
import { LinkedSupplierInput } from "./linkedsupplier";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { BillLineItem } from "./billlineitem";
import { LinkedSupplier } from "./linkedsupplier";


export enum BillStatusEnum {
    Draft = "draft",
    Submitted = "submitted",
    Authorised = "authorised",
    PartiallyPaid = "partially_paid",
    Paid = "paid",
    Void = "void",
    Credit = "credit",
    Deleted = "deleted"
}


export class BillInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=bill_date" })
  billDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=bill_number" })
  billNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=currency_rate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=deposit" })
  deposit?: number;

  @SpeakeasyMetadata({ data: "json, name=due_date" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ledger_account" })
  ledgerAccount?: LinkedLedgerAccountInput;

  @SpeakeasyMetadata({ data: "json, name=line_items", elemType: BillLineItemInput })
  lineItems?: BillLineItemInput[];

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=paid_date" })
  paidDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=po_number" })
  poNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: BillStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=sub_total" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=supplier" })
  supplier?: LinkedSupplierInput;

  @SpeakeasyMetadata({ data: "json, name=tax_code" })
  taxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_inclusive" })
  taxInclusive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=terms" })
  terms?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=total_tax" })
  totalTax?: number;
}


export class Bill extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=bill_date" })
  billDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=bill_number" })
  billNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=currency_rate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=deposit" })
  deposit?: number;

  @SpeakeasyMetadata({ data: "json, name=downstream_id" })
  downstreamId?: string;

  @SpeakeasyMetadata({ data: "json, name=due_date" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ledger_account" })
  ledgerAccount?: LinkedLedgerAccount;

  @SpeakeasyMetadata({ data: "json, name=line_items", elemType: BillLineItem })
  lineItems?: BillLineItem[];

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=paid_date" })
  paidDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=po_number" })
  poNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: BillStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=sub_total" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=supplier" })
  supplier?: LinkedSupplier;

  @SpeakeasyMetadata({ data: "json, name=tax_code" })
  taxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_inclusive" })
  taxInclusive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=terms" })
  terms?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=total_tax" })
  totalTax?: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
