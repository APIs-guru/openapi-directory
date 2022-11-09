import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PricePerBuyer } from "./priceperbuyer";


// NonGuaranteedFixedPriceTerms
/** 
 * Terms for Preferred Deals.
**/
export class NonGuaranteedFixedPriceTerms extends SpeakeasyBase {
  @Metadata({ data: "json, name=fixedPrices", elemType: shared.PricePerBuyer })
  fixedPrices?: PricePerBuyer[];
}
