import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";
import { Price } from "./price";


export class DealTermsRubiconNonGuaranteedTerms extends SpeakeasyBase {
  @Metadata({ data: "json, name=priorityPrice" })
  priorityPrice?: Price;

  @Metadata({ data: "json, name=standardPrice" })
  standardPrice?: Price;
}
