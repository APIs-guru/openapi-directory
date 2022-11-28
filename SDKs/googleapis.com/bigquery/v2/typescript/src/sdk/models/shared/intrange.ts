import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IntRange
/** 
 * Range of an int hyperparameter.
**/
export class IntRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: string;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: string;
}
