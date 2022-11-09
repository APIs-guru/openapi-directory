import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NumericValue
/** 
 * To represent a number.
**/
export class NumericValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=int64Value" })
  int64Value?: string;
}
