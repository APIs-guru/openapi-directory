import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubscriptionDeferralInfo } from "./subscriptiondeferralinfo";


// SubscriptionPurchasesDeferRequest
/** 
 * Request for the purchases.subscriptions.defer API.
**/
export class SubscriptionPurchasesDeferRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deferralInfo" })
  deferralInfo?: SubscriptionDeferralInfo;
}
