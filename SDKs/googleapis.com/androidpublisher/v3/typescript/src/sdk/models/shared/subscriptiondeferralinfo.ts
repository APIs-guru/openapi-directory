import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SubscriptionDeferralInfo
/** 
 * A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time.
**/
export class SubscriptionDeferralInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=desiredExpiryTimeMillis" })
  desiredExpiryTimeMillis?: string;

  @Metadata({ data: "json, name=expectedExpiryTimeMillis" })
  expectedExpiryTimeMillis?: string;
}
