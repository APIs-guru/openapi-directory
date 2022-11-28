import { SpeakeasyBase } from "../../../internal/utils";
import { ConvertedOtherRegionsPrice } from "./convertedotherregionsprice";
import { ConvertedRegionPrice } from "./convertedregionprice";
/**
 * Response message for ConvertRegionPrices.
**/
export declare class ConvertRegionPricesResponse extends SpeakeasyBase {
    convertedOtherRegionsPrice?: ConvertedOtherRegionsPrice;
    convertedRegionPrices?: Map<string, ConvertedRegionPrice>;
}
