import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionDeferralInfo } from "./subscriptiondeferralinfo";
/**
 * Request for the purchases.subscriptions.defer API.
**/
export declare class SubscriptionPurchasesDeferRequest extends SpeakeasyBase {
    deferralInfo?: SubscriptionDeferralInfo;
}
