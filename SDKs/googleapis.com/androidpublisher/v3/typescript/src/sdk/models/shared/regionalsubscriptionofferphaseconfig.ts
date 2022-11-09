import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";
import { Money } from "./money";


// RegionalSubscriptionOfferPhaseConfig
/** 
 * Configuration for a single phase of a subscription offer in a single region.
**/
export class RegionalSubscriptionOfferPhaseConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=absoluteDiscount" })
  absoluteDiscount?: Money;

  @Metadata({ data: "json, name=price" })
  price?: Money;

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;

  @Metadata({ data: "json, name=relativeDiscount" })
  relativeDiscount?: number;
}
