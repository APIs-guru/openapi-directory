import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";



// OtherRegionsSubscriptionOfferPhasePrices
/** 
 * Pricing information for any new locations Play may launch in.
**/
export class OtherRegionsSubscriptionOfferPhasePrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eurPrice" })
  eurPrice?: Money;

  @SpeakeasyMetadata({ data: "json, name=usdPrice" })
  usdPrice?: Money;
}
