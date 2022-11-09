import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HyperParameterScalingTypeEnum } from "./hyperparameterscalingtypeenum";


// IntegerParameterRange
/** 
 * For a hyperparameter of the integer type, specifies the range that a hyperparameter tuning job searches.
**/
export class IntegerParameterRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxValue" })
  maxValue: string;

  @Metadata({ data: "json, name=MinValue" })
  minValue: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=ScalingType" })
  scalingType?: HyperParameterScalingTypeEnum;
}
