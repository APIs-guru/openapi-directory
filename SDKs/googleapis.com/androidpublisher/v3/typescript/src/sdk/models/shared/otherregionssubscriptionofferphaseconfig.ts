import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OtherRegionsSubscriptionOfferPhasePrices } from "./otherregionssubscriptionofferphaseprices";



// OtherRegionsSubscriptionOfferPhaseConfig
/** 
 * Configuration for any new locations Play may launch in for a single offer phase.
**/
export class OtherRegionsSubscriptionOfferPhaseConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=absoluteDiscounts" })
  absoluteDiscounts?: OtherRegionsSubscriptionOfferPhasePrices;

  @SpeakeasyMetadata({ data: "json, name=otherRegionsPrices" })
  otherRegionsPrices?: OtherRegionsSubscriptionOfferPhasePrices;

  @SpeakeasyMetadata({ data: "json, name=relativeDiscount" })
  relativeDiscount?: number;
}
