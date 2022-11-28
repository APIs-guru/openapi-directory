import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PricePerBuyer } from "./priceperbuyer";



// NonGuaranteedFixedPriceTerms
/** 
 * Terms for Preferred Deals.
**/
export class NonGuaranteedFixedPriceTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fixedPrices", elemType: PricePerBuyer })
  fixedPrices?: PricePerBuyer[];
}
