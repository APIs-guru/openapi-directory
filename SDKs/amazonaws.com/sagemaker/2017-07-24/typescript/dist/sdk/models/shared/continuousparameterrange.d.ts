import { SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterScalingTypeEnum } from "./hyperparameterscalingtypeenum";
/**
 * A list of continuous hyperparameters to tune.
**/
export declare class ContinuousParameterRange extends SpeakeasyBase {
    maxValue: string;
    minValue: string;
    name: string;
    scalingType?: HyperParameterScalingTypeEnum;
}
