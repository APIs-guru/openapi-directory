import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConvertedOtherRegionsPrice } from "./convertedotherregionsprice";
import { ConvertedRegionPrice } from "./convertedregionprice";



// ConvertRegionPricesResponse
/** 
 * Response message for ConvertRegionPrices.
**/
export class ConvertRegionPricesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=convertedOtherRegionsPrice" })
  convertedOtherRegionsPrice?: ConvertedOtherRegionsPrice;

  @SpeakeasyMetadata({ data: "json, name=convertedRegionPrices", elemType: ConvertedRegionPrice })
  convertedRegionPrices?: Map<string, ConvertedRegionPrice>;
}
