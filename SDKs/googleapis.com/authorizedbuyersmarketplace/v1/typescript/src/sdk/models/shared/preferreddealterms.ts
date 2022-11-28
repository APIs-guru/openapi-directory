import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



// PreferredDealTerms
/** 
 * Pricing terms for Preferred Deals.
**/
export class PreferredDealTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fixedPrice" })
  fixedPrice?: Price;
}
