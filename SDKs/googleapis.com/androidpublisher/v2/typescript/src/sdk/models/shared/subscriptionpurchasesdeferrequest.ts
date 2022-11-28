import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionDeferralInfo } from "./subscriptiondeferralinfo";



export class SubscriptionPurchasesDeferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deferralInfo" })
  deferralInfo?: SubscriptionDeferralInfo;
}
