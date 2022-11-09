import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";
import { Money } from "./money";


// ConvertedOtherRegionsPrice
/** 
 * Converted other regions prices.
**/
export class ConvertedOtherRegionsPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=eurPrice" })
  eurPrice?: Money;

  @Metadata({ data: "json, name=usdPrice" })
  usdPrice?: Money;
}
