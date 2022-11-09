import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PricePerBuyer } from "./priceperbuyer";


export class DealTermsNonGuaranteedFixedPriceTerms extends SpeakeasyBase {
  @Metadata({ data: "json, name=fixedPrices", elemType: shared.PricePerBuyer })
  fixedPrices?: PricePerBuyer[];
}
