import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DoubleRange
/** 
 * A range between two double numbers.
**/
export class DoubleRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;
}
