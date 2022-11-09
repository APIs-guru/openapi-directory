import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DoubleRange
/** 
 * Range of a double hyperparameter.
**/
export class DoubleRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=max" })
  max?: number;

  @Metadata({ data: "json, name=min" })
  min?: number;
}
