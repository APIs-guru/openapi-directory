import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NumericValue } from "./numericvalue";
import { NumericValue } from "./numericvalue";


// BetweenFilter
/** 
 * To express that the result needs to be between two numbers (inclusive).
**/
export class BetweenFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=fromValue" })
  fromValue?: NumericValue;

  @Metadata({ data: "json, name=toValue" })
  toValue?: NumericValue;
}
