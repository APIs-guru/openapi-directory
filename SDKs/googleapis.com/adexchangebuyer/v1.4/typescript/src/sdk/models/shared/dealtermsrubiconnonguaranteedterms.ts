import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



export class DealTermsRubiconNonGuaranteedTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=priorityPrice" })
  priorityPrice?: Price;

  @SpeakeasyMetadata({ data: "json, name=standardPrice" })
  standardPrice?: Price;
}
