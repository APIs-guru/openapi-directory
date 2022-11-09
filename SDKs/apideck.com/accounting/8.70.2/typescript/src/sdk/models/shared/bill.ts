import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CurrencyEnum } from "./currencyenum";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { BillLineItem } from "./billlineitem";
import { LinkedSupplier } from "./linkedsupplier";

export enum BillStatusEnum {
    Draft = "draft"
,    Submitted = "submitted"
,    Authorised = "authorised"
,    PartiallyPaid = "partially_paid"
,    Paid = "paid"
,    Void = "void"
,    Credit = "credit"
,    Deleted = "deleted"
}


export class Bill extends SpeakeasyBase {
  @Metadata({ data: "json, name=balance" })
  balance?: number;

  @Metadata({ data: "json, name=bill_date" })
  billDate?: Date;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=currency_rate" })
  currencyRate?: number;

  @Metadata({ data: "json, name=deposit" })
  deposit?: number;

  @Metadata({ data: "json, name=downstream_id" })
  downstreamId?: string;

  @Metadata({ data: "json, name=due_date" })
  dueDate?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=ledger_account" })
  ledgerAccount?: LinkedLedgerAccount;

  @Metadata({ data: "json, name=line_items", elemType: shared.BillLineItem })
  lineItems?: BillLineItem[];

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=paid_date" })
  paidDate?: Date;

  @Metadata({ data: "json, name=po_number" })
  poNumber?: string;

  @Metadata({ data: "json, name=reference" })
  reference?: string;

  @Metadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @Metadata({ data: "json, name=status" })
  status?: BillStatusEnum;

  @Metadata({ data: "json, name=sub_total" })
  subTotal?: number;

  @Metadata({ data: "json, name=supplier" })
  supplier?: LinkedSupplier;

  @Metadata({ data: "json, name=tax_code" })
  taxCode?: string;

  @Metadata({ data: "json, name=tax_inclusive" })
  taxInclusive?: boolean;

  @Metadata({ data: "json, name=terms" })
  terms?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=total_tax" })
  totalTax?: number;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
