import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DoubleRange
/** 
 * A range between two double numbers.
**/
export class DoubleRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=start" })
  start?: number;
}
