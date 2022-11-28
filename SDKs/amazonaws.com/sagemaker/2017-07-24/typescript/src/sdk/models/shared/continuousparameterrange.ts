import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterScalingTypeEnum } from "./hyperparameterscalingtypeenum";



// ContinuousParameterRange
/** 
 * A list of continuous hyperparameters to tune.
**/
export class ContinuousParameterRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxValue" })
  maxValue: string;

  @SpeakeasyMetadata({ data: "json, name=MinValue" })
  minValue: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=ScalingType" })
  scalingType?: HyperParameterScalingTypeEnum;
}
