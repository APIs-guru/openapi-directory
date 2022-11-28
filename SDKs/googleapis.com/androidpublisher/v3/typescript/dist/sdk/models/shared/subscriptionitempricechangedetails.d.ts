import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
export declare enum SubscriptionItemPriceChangeDetailsPriceChangeModeEnum {
    PriceChangeModeUnspecified = "PRICE_CHANGE_MODE_UNSPECIFIED",
    PriceDecrease = "PRICE_DECREASE",
    PriceIncrease = "PRICE_INCREASE"
}
export declare enum SubscriptionItemPriceChangeDetailsPriceChangeStateEnum {
    PriceChangeStateUnspecified = "PRICE_CHANGE_STATE_UNSPECIFIED",
    Outstanding = "OUTSTANDING",
    Confirmed = "CONFIRMED",
    Applied = "APPLIED"
}
/**
 * Price change related information of a subscription item.
**/
export declare class SubscriptionItemPriceChangeDetails extends SpeakeasyBase {
    expectedNewPriceChargeTime?: string;
    newPrice?: Money;
    priceChangeMode?: SubscriptionItemPriceChangeDetailsPriceChangeModeEnum;
    priceChangeState?: SubscriptionItemPriceChangeDetailsPriceChangeStateEnum;
}
