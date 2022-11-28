import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NumericValue
/** 
 * To represent a number.
**/
export class NumericValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=int64Value" })
  int64Value?: string;
}
