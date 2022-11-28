import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterScalingTypeEnum } from "./hyperparameterscalingtypeenum";



// IntegerParameterRange
/** 
 * For a hyperparameter of the integer type, specifies the range that a hyperparameter tuning job searches.
**/
export class IntegerParameterRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxValue" })
  maxValue: string;

  @SpeakeasyMetadata({ data: "json, name=MinValue" })
  minValue: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=ScalingType" })
  scalingType?: HyperParameterScalingTypeEnum;
}
