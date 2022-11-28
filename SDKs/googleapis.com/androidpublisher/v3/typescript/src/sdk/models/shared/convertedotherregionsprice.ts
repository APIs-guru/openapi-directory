import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";



// ConvertedOtherRegionsPrice
/** 
 * Converted other regions prices.
**/
export class ConvertedOtherRegionsPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eurPrice" })
  eurPrice?: Money;

  @SpeakeasyMetadata({ data: "json, name=usdPrice" })
  usdPrice?: Money;
}
