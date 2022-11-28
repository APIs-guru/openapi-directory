import { SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterScalingTypeEnum } from "./hyperparameterscalingtypeenum";
/**
 * For a hyperparameter of the integer type, specifies the range that a hyperparameter tuning job searches.
**/
export declare class IntegerParameterRange extends SpeakeasyBase {
    maxValue: string;
    minValue: string;
    name: string;
    scalingType?: HyperParameterScalingTypeEnum;
}
