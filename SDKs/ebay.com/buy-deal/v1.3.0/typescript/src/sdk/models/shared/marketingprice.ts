import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



// MarketingPrice
/** 
 * A type that describes the seller discount.
**/
export class MarketingPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discountAmount" })
  discountAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: string;

  @SpeakeasyMetadata({ data: "json, name=originalPrice" })
  originalPrice?: Amount;

  @SpeakeasyMetadata({ data: "json, name=priceTreatment" })
  priceTreatment?: string;
}
