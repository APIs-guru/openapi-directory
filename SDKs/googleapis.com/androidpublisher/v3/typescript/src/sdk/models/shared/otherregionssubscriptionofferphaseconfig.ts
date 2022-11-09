import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OtherRegionsSubscriptionOfferPhasePrices } from "./otherregionssubscriptionofferphaseprices";
import { OtherRegionsSubscriptionOfferPhasePrices } from "./otherregionssubscriptionofferphaseprices";


// OtherRegionsSubscriptionOfferPhaseConfig
/** 
 * Configuration for any new locations Play may launch in for a single offer phase.
**/
export class OtherRegionsSubscriptionOfferPhaseConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=absoluteDiscounts" })
  absoluteDiscounts?: OtherRegionsSubscriptionOfferPhasePrices;

  @Metadata({ data: "json, name=otherRegionsPrices" })
  otherRegionsPrices?: OtherRegionsSubscriptionOfferPhasePrices;

  @Metadata({ data: "json, name=relativeDiscount" })
  relativeDiscount?: number;
}
