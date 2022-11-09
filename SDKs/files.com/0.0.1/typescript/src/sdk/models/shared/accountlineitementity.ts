import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InvoiceLineItemEntity } from "./invoicelineitementity";
import { PaymentLineItemEntity } from "./paymentlineitementity";


// AccountLineItemEntity
/** 
 * List Payments
**/
export class AccountLineItemEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=balance" })
  balance?: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=download_uri" })
  downloadUri?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=invoice_line_items" })
  invoiceLineItems?: InvoiceLineItemEntity;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=payment_line_items" })
  paymentLineItems?: PaymentLineItemEntity;

  @Metadata({ data: "json, name=payment_reversed_at" })
  paymentReversedAt?: Date;

  @Metadata({ data: "json, name=payment_type" })
  paymentType?: string;

  @Metadata({ data: "json, name=site_name" })
  siteName?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
