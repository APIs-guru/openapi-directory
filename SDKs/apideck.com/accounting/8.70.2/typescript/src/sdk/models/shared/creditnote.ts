import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CurrencyEnum } from "./currencyenum";
import { LinkedCustomer } from "./linkedcustomer";
import { InvoiceLineItem } from "./invoicelineitem";

export enum CreditNoteCreditNoteStatusEnum {
    Draft = "draft"
,    Authorised = "authorised"
,    Paid = "paid"
,    Voided = "voided"
,    Deleted = "deleted"
}

export enum CreditNoteCreditNoteTypeEnum {
    AccountsReceivableCredit = "accounts_receivable_credit"
,    AccountsPayableCredit = "accounts_payable_credit"
}


export class CreditNote extends SpeakeasyBase {
  @Metadata({ data: "json, name=allocations" })
  allocations?: any[];

  @Metadata({ data: "json, name=balance" })
  balance?: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=currency_rate" })
  currencyRate?: number;

  @Metadata({ data: "json, name=customer" })
  customer?: LinkedCustomer;

  @Metadata({ data: "json, name=date_issued" })
  dateIssued?: Date;

  @Metadata({ data: "json, name=date_paid" })
  datePaid?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=line_items", elemType: shared.InvoiceLineItem })
  lineItems?: InvoiceLineItem[];

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=number" })
  number?: string;

  @Metadata({ data: "json, name=reference" })
  reference?: string;

  @Metadata({ data: "json, name=remaining_credit" })
  remainingCredit?: number;

  @Metadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @Metadata({ data: "json, name=status" })
  status?: CreditNoteCreditNoteStatusEnum;

  @Metadata({ data: "json, name=sub_total" })
  subTotal?: number;

  @Metadata({ data: "json, name=tax_code" })
  taxCode?: string;

  @Metadata({ data: "json, name=tax_inclusive" })
  taxInclusive?: boolean;

  @Metadata({ data: "json, name=total_amount" })
  totalAmount: number;

  @Metadata({ data: "json, name=total_tax" })
  totalTax?: number;

  @Metadata({ data: "json, name=type" })
  type?: CreditNoteCreditNoteTypeEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
