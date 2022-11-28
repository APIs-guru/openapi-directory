import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoRenewingPlan } from "./autorenewingplan";
import { OfferDetails } from "./offerdetails";
import { PrepaidPlan } from "./prepaidplan";



// SubscriptionPurchaseLineItem
/** 
 * Item-level info for a subscription purchase.
**/
export class SubscriptionPurchaseLineItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoRenewingPlan" })
  autoRenewingPlan?: AutoRenewingPlan;

  @SpeakeasyMetadata({ data: "json, name=expiryTime" })
  expiryTime?: string;

  @SpeakeasyMetadata({ data: "json, name=offerDetails" })
  offerDetails?: OfferDetails;

  @SpeakeasyMetadata({ data: "json, name=prepaidPlan" })
  prepaidPlan?: PrepaidPlan;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;
}
