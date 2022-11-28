import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DoubleRange
/** 
 * Range of a double hyperparameter.
**/
export class DoubleRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: number;
}
