import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
**/
export declare class SubscriptionPurchase extends SpeakeasyBase {
    autoRenewing?: boolean;
    initiationTimestampMsec?: string;
    kind?: string;
    validUntilTimestampMsec?: string;
}
