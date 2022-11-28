import { SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTuningJobObjectiveTypeEnum } from "./hyperparametertuningjobobjectivetypeenum";
/**
 * Defines the objective metric for a hyperparameter tuning job. Hyperparameter tuning uses the value of this metric to evaluate the training jobs it launches, and returns the training job that results in either the highest or lowest value for this metric, depending on the value you specify for the <code>Type</code> parameter.
**/
export declare class HyperParameterTuningJobObjective extends SpeakeasyBase {
    metricName: string;
    type: HyperParameterTuningJobObjectiveTypeEnum;
}
