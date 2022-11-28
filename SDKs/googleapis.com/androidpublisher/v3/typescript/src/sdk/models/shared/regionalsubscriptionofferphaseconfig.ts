import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";



// RegionalSubscriptionOfferPhaseConfig
/** 
 * Configuration for a single phase of a subscription offer in a single region.
**/
export class RegionalSubscriptionOfferPhaseConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=absoluteDiscount" })
  absoluteDiscount?: Money;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: Money;

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=relativeDiscount" })
  relativeDiscount?: number;
}
