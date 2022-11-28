import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InvoiceLineItemEntityTypeEnum {
    Invoice = "invoice",
    Adjustment = "adjustment",
    UsageOverage = "usage_overage",
    UserOverage = "user_overage",
    AddonSubscription = "addon_subscription",
    MiscFee = "misc_fee"
}


export class InvoiceLineItemEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan?: string;

  @SpeakeasyMetadata({ data: "json, name=service_end_at" })
  serviceEndAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=service_start_at" })
  serviceStartAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: InvoiceLineItemEntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
