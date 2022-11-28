import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PricePerBuyer } from "./priceperbuyer";



export class DealTermsNonGuaranteedFixedPriceTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fixedPrices", elemType: PricePerBuyer })
  fixedPrices?: PricePerBuyer[];
}
