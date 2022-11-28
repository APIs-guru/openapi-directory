import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";



// ConvertedRegionPrice
/** 
 * A converted region price.
**/
export class ConvertedRegionPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: Money;

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: Money;
}
