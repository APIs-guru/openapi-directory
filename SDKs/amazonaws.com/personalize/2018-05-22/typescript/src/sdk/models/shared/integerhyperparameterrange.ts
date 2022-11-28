import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IntegerHyperParameterRange
/** 
 * Provides the name and range of an integer-valued hyperparameter.
**/
export class IntegerHyperParameterRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
