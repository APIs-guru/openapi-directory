import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubscriptionDeferralInfo } from "./subscriptiondeferralinfo";


export class SubscriptionPurchasesDeferRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deferralInfo" })
  deferralInfo?: SubscriptionDeferralInfo;
}
