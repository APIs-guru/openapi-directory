import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";


export enum SubscriptionItemPriceChangeDetailsPriceChangeModeEnum {
    PriceChangeModeUnspecified = "PRICE_CHANGE_MODE_UNSPECIFIED",
    PriceDecrease = "PRICE_DECREASE",
    PriceIncrease = "PRICE_INCREASE"
}

export enum SubscriptionItemPriceChangeDetailsPriceChangeStateEnum {
    PriceChangeStateUnspecified = "PRICE_CHANGE_STATE_UNSPECIFIED",
    Outstanding = "OUTSTANDING",
    Confirmed = "CONFIRMED",
    Applied = "APPLIED"
}


// SubscriptionItemPriceChangeDetails
/** 
 * Price change related information of a subscription item.
**/
export class SubscriptionItemPriceChangeDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expectedNewPriceChargeTime" })
  expectedNewPriceChargeTime?: string;

  @SpeakeasyMetadata({ data: "json, name=newPrice" })
  newPrice?: Money;

  @SpeakeasyMetadata({ data: "json, name=priceChangeMode" })
  priceChangeMode?: SubscriptionItemPriceChangeDetailsPriceChangeModeEnum;

  @SpeakeasyMetadata({ data: "json, name=priceChangeState" })
  priceChangeState?: SubscriptionItemPriceChangeDetailsPriceChangeStateEnum;
}
