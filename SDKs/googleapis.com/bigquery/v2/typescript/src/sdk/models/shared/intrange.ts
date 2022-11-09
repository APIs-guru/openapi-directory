import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IntRange
/** 
 * Range of an int hyperparameter.
**/
export class IntRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=max" })
  max?: string;

  @Metadata({ data: "json, name=min" })
  min?: string;
}
