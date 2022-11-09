import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Ad } from "./ad";


// MarketingRecommendation
/** 
 * A complex type that contains information about how a seller can improve their listing configurations. The AD object contains Promoted Listings recommendations and information, which the seller can use to improve buyer conversions. The response can also contain an optional message about the returned data.
**/
export class MarketingRecommendation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ad" })
  ad?: Ad;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
