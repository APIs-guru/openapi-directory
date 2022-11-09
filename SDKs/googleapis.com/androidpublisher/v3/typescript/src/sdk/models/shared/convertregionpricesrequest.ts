import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// ConvertRegionPricesRequest
/** 
 * Request message for ConvertRegionPrices.
**/
export class ConvertRegionPricesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=price" })
  price?: Money;
}
