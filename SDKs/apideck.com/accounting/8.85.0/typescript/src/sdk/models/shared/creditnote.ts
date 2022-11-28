import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { CurrencyEnum } from "./currencyenum";
import { LinkedCustomer } from "./linkedcustomer";
import { InvoiceLineItem } from "./invoicelineitem";
import { LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { LinkedCustomerInput } from "./linkedcustomer";
import { InvoiceLineItemInput } from "./invoicelineitem";


export enum CreditNoteCreditNoteStatusEnum {
    Draft = "draft",
    Authorised = "authorised",
    Paid = "paid",
    Voided = "voided",
    Deleted = "deleted"
}

export enum CreditNoteCreditNoteTypeEnum {
    AccountsReceivableCredit = "accounts_receivable_credit",
    AccountsPayableCredit = "accounts_payable_credit"
}


export class CreditNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: LinkedLedgerAccount;

  @SpeakeasyMetadata({ data: "json, name=allocations" })
  allocations?: any[];

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=currency_rate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: LinkedCustomer;

  @SpeakeasyMetadata({ data: "json, name=date_issued" })
  dateIssued?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_paid" })
  datePaid?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=line_items", elemType: InvoiceLineItem })
  lineItems?: InvoiceLineItem[];

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=remaining_credit" })
  remainingCredit?: number;

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CreditNoteCreditNoteStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=sub_total" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=tax_code" })
  taxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_inclusive" })
  taxInclusive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=total_amount" })
  totalAmount: number;

  @SpeakeasyMetadata({ data: "json, name=total_tax" })
  totalTax?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreditNoteCreditNoteTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}


export class CreditNoteInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: LinkedLedgerAccountInput;

  @SpeakeasyMetadata({ data: "json, name=allocations" })
  allocations?: any[];

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=currency_rate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: LinkedCustomerInput;

  @SpeakeasyMetadata({ data: "json, name=date_issued" })
  dateIssued?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_paid" })
  datePaid?: Date;

  @SpeakeasyMetadata({ data: "json, name=line_items", elemType: InvoiceLineItemInput })
  lineItems?: InvoiceLineItemInput[];

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=remaining_credit" })
  remainingCredit?: number;

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CreditNoteCreditNoteStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=sub_total" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=tax_code" })
  taxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_inclusive" })
  taxInclusive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=total_amount" })
  totalAmount: number;

  @SpeakeasyMetadata({ data: "json, name=total_tax" })
  totalTax?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreditNoteCreditNoteTypeEnum;
}
