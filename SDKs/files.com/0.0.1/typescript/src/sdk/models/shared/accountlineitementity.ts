import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InvoiceLineItemEntity } from "./invoicelineitementity";
import { PaymentLineItemEntity } from "./paymentlineitementity";



// AccountLineItemEntity
/** 
 * List Payments
**/
export class AccountLineItemEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=download_uri" })
  downloadUri?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=invoice_line_items" })
  invoiceLineItems?: InvoiceLineItemEntity;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=payment_line_items" })
  paymentLineItems?: PaymentLineItemEntity;

  @SpeakeasyMetadata({ data: "json, name=payment_reversed_at" })
  paymentReversedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=payment_type" })
  paymentType?: string;

  @SpeakeasyMetadata({ data: "json, name=site_name" })
  siteName?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
