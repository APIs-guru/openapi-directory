import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PaymentLineItemEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=invoice_id" })
  invoiceId?: number;

  @Metadata({ data: "json, name=payment_id" })
  paymentId?: number;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
