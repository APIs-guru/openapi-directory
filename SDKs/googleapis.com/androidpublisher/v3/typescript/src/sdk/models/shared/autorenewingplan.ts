import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionItemPriceChangeDetails } from "./subscriptionitempricechangedetails";



// AutoRenewingPlan
/** 
 * Information related to an auto renewing plan.
**/
export class AutoRenewingPlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoRenewEnabled" })
  autoRenewEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=priceChangeDetails" })
  priceChangeDetails?: SubscriptionItemPriceChangeDetails;
}
