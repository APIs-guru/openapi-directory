import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";



// ConvertRegionPricesRequest
/** 
 * Request message for ConvertRegionPrices.
**/
export class ConvertRegionPricesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: Money;
}
