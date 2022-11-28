import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InvoiceLineItemEntityTypeEnum {
    Invoice = "invoice",
    Adjustment = "adjustment",
    UsageOverage = "usage_overage",
    UserOverage = "user_overage",
    AddonSubscription = "addon_subscription",
    MiscFee = "misc_fee"
}
export declare class InvoiceLineItemEntity extends SpeakeasyBase {
    amount?: number;
    createdAt?: Date;
    description?: string;
    plan?: string;
    serviceEndAt?: Date;
    serviceStartAt?: Date;
    site?: string;
    type?: InvoiceLineItemEntityTypeEnum;
    updatedAt?: Date;
}
