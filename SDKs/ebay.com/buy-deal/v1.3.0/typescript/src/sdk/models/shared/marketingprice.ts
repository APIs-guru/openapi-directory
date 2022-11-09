import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";
import { Amount } from "./amount";


// MarketingPrice
/** 
 * A type that describes the seller discount.
**/
export class MarketingPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=discountAmount" })
  discountAmount?: Amount;

  @Metadata({ data: "json, name=discountPercentage" })
  discountPercentage?: string;

  @Metadata({ data: "json, name=originalPrice" })
  originalPrice?: Amount;

  @Metadata({ data: "json, name=priceTreatment" })
  priceTreatment?: string;
}
