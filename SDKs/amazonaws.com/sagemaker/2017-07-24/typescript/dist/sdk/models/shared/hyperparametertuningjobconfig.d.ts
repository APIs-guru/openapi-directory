import { SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTuningJobObjective } from "./hyperparametertuningjobobjective";
import { ParameterRanges } from "./parameterranges";
import { ResourceLimits } from "./resourcelimits";
import { HyperParameterTuningJobStrategyTypeEnum } from "./hyperparametertuningjobstrategytypeenum";
import { TrainingJobEarlyStoppingTypeEnum } from "./trainingjobearlystoppingtypeenum";
import { TuningJobCompletionCriteria } from "./tuningjobcompletioncriteria";
/**
 * Configures a hyperparameter tuning job.
**/
export declare class HyperParameterTuningJobConfig extends SpeakeasyBase {
    hyperParameterTuningJobObjective?: HyperParameterTuningJobObjective;
    parameterRanges?: ParameterRanges;
    resourceLimits: ResourceLimits;
    strategy: HyperParameterTuningJobStrategyTypeEnum;
    trainingJobEarlyStoppingType?: TrainingJobEarlyStoppingTypeEnum;
    tuningJobCompletionCriteria?: TuningJobCompletionCriteria;
}
