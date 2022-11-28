import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NumericValue } from "./numericvalue";



// BetweenFilter
/** 
 * To express that the result needs to be between two numbers (inclusive).
**/
export class BetweenFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fromValue" })
  fromValue?: NumericValue;

  @SpeakeasyMetadata({ data: "json, name=toValue" })
  toValue?: NumericValue;
}
