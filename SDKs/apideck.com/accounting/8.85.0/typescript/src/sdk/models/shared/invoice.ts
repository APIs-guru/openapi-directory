import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { LinkedCustomer } from "./linkedcustomer";
import { InvoiceLineItem } from "./invoicelineitem";
import { LinkedCustomerInput } from "./linkedcustomer";
import { InvoiceLineItemInput } from "./invoicelineitem";


export enum InvoiceStatusEnum {
    Draft = "draft",
    Submitted = "submitted",
    Authorised = "authorised",
    PartiallyPaid = "partially_paid",
    Paid = "paid",
    Void = "void",
    Credit = "credit",
    Deleted = "deleted"
}

export enum InvoiceInvoiceTypeEnum {
    Standard = "standard",
    Credit = "credit",
    Service = "service",
    Product = "product",
    Supplier = "supplier",
    Other = "other"
}


export class Invoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=billing_address" })
  billingAddress?: Address;

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

  @SpeakeasyMetadata({ data: "json, name=customer_memo" })
  customerMemo?: string;

  @SpeakeasyMetadata({ data: "json, name=deposit" })
  deposit?: number;

  @SpeakeasyMetadata({ data: "json, name=discount_percentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=downstream_id" })
  downstreamId?: string;

  @SpeakeasyMetadata({ data: "json, name=due_date" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invoice_date" })
  invoiceDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=invoice_sent" })
  invoiceSent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=line_items", elemType: InvoiceLineItem })
  lineItems?: InvoiceLineItem[];

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=po_number" })
  poNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=shipping_address" })
  shippingAddress?: Address;

  @SpeakeasyMetadata({ data: "json, name=source_document_url" })
  sourceDocumentUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: InvoiceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=sub_total" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=tax_code" })
  taxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_inclusive" })
  taxInclusive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=template_id" })
  templateId?: string;

  @SpeakeasyMetadata({ data: "json, name=terms" })
  terms?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=total_tax" })
  totalTax?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: InvoiceInvoiceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}


export class InvoiceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=billing_address" })
  billingAddress?: Address;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=currency_rate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: LinkedCustomerInput;

  @SpeakeasyMetadata({ data: "json, name=customer_memo" })
  customerMemo?: string;

  @SpeakeasyMetadata({ data: "json, name=deposit" })
  deposit?: number;

  @SpeakeasyMetadata({ data: "json, name=discount_percentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=due_date" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=invoice_date" })
  invoiceDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=invoice_sent" })
  invoiceSent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=line_items", elemType: InvoiceLineItemInput })
  lineItems?: InvoiceLineItemInput[];

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=po_number" })
  poNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=shipping_address" })
  shippingAddress?: Address;

  @SpeakeasyMetadata({ data: "json, name=source_document_url" })
  sourceDocumentUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: InvoiceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=sub_total" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=tax_code" })
  taxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_inclusive" })
  taxInclusive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=template_id" })
  templateId?: string;

  @SpeakeasyMetadata({ data: "json, name=terms" })
  terms?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=total_tax" })
  totalTax?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: InvoiceInvoiceTypeEnum;
}
