import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProductRecommendation
/** 
 * This type is used by the productRecommendation container, which is returned if eBay has found an eBay catalog product that may be a match for the product (or product variation) that has a listing violation. Note: eBay catalog product adoption is not enforced at this time, so product adoption violations are no longer returned. Due to this fact, this type and productRecommendation container are not currently applicable.
**/
export class ProductRecommendation extends SpeakeasyBase {
  @Metadata({ data: "json, name=epid" })
  epid?: string;
}
