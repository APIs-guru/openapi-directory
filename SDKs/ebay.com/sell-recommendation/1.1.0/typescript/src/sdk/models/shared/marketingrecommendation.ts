import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ad } from "./ad";



// MarketingRecommendation
/** 
 * A complex type that contains information about how a seller can improve their listing configurations. The AD object contains Promoted Listings recommendations and information, which the seller can use to improve buyer conversions. The response can also contain an optional message about the returned data.
**/
export class MarketingRecommendation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ad" })
  ad?: Ad;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
