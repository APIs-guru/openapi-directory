import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionDeferralInfo } from "./subscriptiondeferralinfo";



// SubscriptionPurchasesDeferRequest
/** 
 * Request for the purchases.subscriptions.defer API.
**/
export class SubscriptionPurchasesDeferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deferralInfo" })
  deferralInfo?: SubscriptionDeferralInfo;
}
