import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HyperParameterScalingTypeEnum } from "./hyperparameterscalingtypeenum";


// ContinuousParameterRange
/** 
 * A list of continuous hyperparameters to tune.
**/
export class ContinuousParameterRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxValue" })
  maxValue: string;

  @Metadata({ data: "json, name=MinValue" })
  minValue: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=ScalingType" })
  scalingType?: HyperParameterScalingTypeEnum;
}
