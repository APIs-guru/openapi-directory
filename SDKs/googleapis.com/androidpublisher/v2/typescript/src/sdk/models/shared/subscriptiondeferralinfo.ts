import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SubscriptionDeferralInfo
/** 
 * A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time.
**/
export class SubscriptionDeferralInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desiredExpiryTimeMillis" })
  desiredExpiryTimeMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=expectedExpiryTimeMillis" })
  expectedExpiryTimeMillis?: string;
}
