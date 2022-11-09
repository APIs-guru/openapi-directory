import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { LinkedCustomer } from "./linkedcustomer";
import { InvoiceLineItem } from "./invoicelineitem";
import { Address } from "./address";

export enum InvoiceStatusEnum {
    Draft = "draft"
,    Submitted = "submitted"
,    Authorised = "authorised"
,    PartiallyPaid = "partially_paid"
,    Paid = "paid"
,    Void = "void"
,    Credit = "credit"
,    Deleted = "deleted"
}

export enum InvoiceInvoiceTypeEnum {
    Standard = "standard"
,    Credit = "credit"
,    Service = "service"
,    Product = "product"
,    Supplier = "supplier"
,    Other = "other"
}


export class Invoice extends SpeakeasyBase {
  @Metadata({ data: "json, name=balance" })
  balance?: number;

  @Metadata({ data: "json, name=billing_address" })
  billingAddress?: Address;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=currency_rate" })
  currencyRate?: number;

  @Metadata({ data: "json, name=customer" })
  customer?: LinkedCustomer;

  @Metadata({ data: "json, name=customer_memo" })
  customerMemo?: string;

  @Metadata({ data: "json, name=deposit" })
  deposit?: number;

  @Metadata({ data: "json, name=discount_percentage" })
  discountPercentage?: number;

  @Metadata({ data: "json, name=downstream_id" })
  downstreamId?: string;

  @Metadata({ data: "json, name=due_date" })
  dueDate?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=invoice_date" })
  invoiceDate?: Date;

  @Metadata({ data: "json, name=invoice_sent" })
  invoiceSent?: boolean;

  @Metadata({ data: "json, name=line_items", elemType: shared.InvoiceLineItem })
  lineItems?: InvoiceLineItem[];

  @Metadata({ data: "json, name=number" })
  number?: string;

  @Metadata({ data: "json, name=po_number" })
  poNumber?: string;

  @Metadata({ data: "json, name=reference" })
  reference?: string;

  @Metadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @Metadata({ data: "json, name=shipping_address" })
  shippingAddress?: Address;

  @Metadata({ data: "json, name=source_document_url" })
  sourceDocumentUrl?: string;

  @Metadata({ data: "json, name=status" })
  status?: InvoiceStatusEnum;

  @Metadata({ data: "json, name=sub_total" })
  subTotal?: number;

  @Metadata({ data: "json, name=tax_code" })
  taxCode?: string;

  @Metadata({ data: "json, name=tax_inclusive" })
  taxInclusive?: boolean;

  @Metadata({ data: "json, name=template_id" })
  templateId?: string;

  @Metadata({ data: "json, name=terms" })
  terms?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=total_tax" })
  totalTax?: number;

  @Metadata({ data: "json, name=type" })
  type?: InvoiceInvoiceTypeEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
