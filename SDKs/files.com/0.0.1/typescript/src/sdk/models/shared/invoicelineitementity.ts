import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InvoiceLineItemEntityTypeEnum {
    Invoice = "invoice"
,    Adjustment = "adjustment"
,    UsageOverage = "usage_overage"
,    UserOverage = "user_overage"
,    AddonSubscription = "addon_subscription"
,    MiscFee = "misc_fee"
}


export class InvoiceLineItemEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=plan" })
  plan?: string;

  @Metadata({ data: "json, name=service_end_at" })
  serviceEndAt?: Date;

  @Metadata({ data: "json, name=service_start_at" })
  serviceStartAt?: Date;

  @Metadata({ data: "json, name=site" })
  site?: string;

  @Metadata({ data: "json, name=type" })
  type?: InvoiceLineItemEntityTypeEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
