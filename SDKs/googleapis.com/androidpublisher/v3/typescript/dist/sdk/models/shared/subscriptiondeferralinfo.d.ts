import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time.
**/
export declare class SubscriptionDeferralInfo extends SpeakeasyBase {
    desiredExpiryTimeMillis?: string;
    expectedExpiryTimeMillis?: string;
}
