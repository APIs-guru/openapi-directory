import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConvertedOtherRegionsPrice } from "./convertedotherregionsprice";
import { ConvertedRegionPrice } from "./convertedregionprice";


// ConvertRegionPricesResponse
/** 
 * Response message for ConvertRegionPrices.
**/
export class ConvertRegionPricesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=convertedOtherRegionsPrice" })
  convertedOtherRegionsPrice?: ConvertedOtherRegionsPrice;

  @Metadata({ data: "json, name=convertedRegionPrices", elemType: shared.ConvertedRegionPrice })
  convertedRegionPrices?: Map<string, ConvertedRegionPrice>;
}
