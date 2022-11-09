import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";
import { Money } from "./money";


// ConvertedRegionPrice
/** 
 * A converted region price.
**/
export class ConvertedRegionPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=price" })
  price?: Money;

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;

  @Metadata({ data: "json, name=taxAmount" })
  taxAmount?: Money;
}
