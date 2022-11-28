import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PaymentLineItemEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=invoice_id" })
  invoiceId?: number;

  @SpeakeasyMetadata({ data: "json, name=payment_id" })
  paymentId?: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
