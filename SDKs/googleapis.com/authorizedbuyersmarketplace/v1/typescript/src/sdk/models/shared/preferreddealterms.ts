import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";


// PreferredDealTerms
/** 
 * Pricing terms for Preferred Deals.
**/
export class PreferredDealTerms extends SpeakeasyBase {
  @Metadata({ data: "json, name=fixedPrice" })
  fixedPrice?: Price;
}
