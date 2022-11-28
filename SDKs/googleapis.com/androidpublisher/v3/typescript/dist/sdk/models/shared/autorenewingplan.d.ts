import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionItemPriceChangeDetails } from "./subscriptionitempricechangedetails";
/**
 * Information related to an auto renewing plan.
**/
export declare class AutoRenewingPlan extends SpeakeasyBase {
    autoRenewEnabled?: boolean;
    priceChangeDetails?: SubscriptionItemPriceChangeDetails;
}
