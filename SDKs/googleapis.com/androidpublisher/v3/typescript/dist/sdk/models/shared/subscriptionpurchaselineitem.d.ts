import { SpeakeasyBase } from "../../../internal/utils";
import { AutoRenewingPlan } from "./autorenewingplan";
import { OfferDetails } from "./offerdetails";
import { PrepaidPlan } from "./prepaidplan";
/**
 * Item-level info for a subscription purchase.
**/
export declare class SubscriptionPurchaseLineItem extends SpeakeasyBase {
    autoRenewingPlan?: AutoRenewingPlan;
    expiryTime?: string;
    offerDetails?: OfferDetails;
    prepaidPlan?: PrepaidPlan;
    productId?: string;
}
