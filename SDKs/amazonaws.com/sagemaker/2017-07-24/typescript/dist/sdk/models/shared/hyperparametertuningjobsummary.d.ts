import { SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTuningJobStatusEnum } from "./hyperparametertuningjobstatusenum";
import { ObjectiveStatusCounters } from "./objectivestatuscounters";
import { ResourceLimits } from "./resourcelimits";
import { HyperParameterTuningJobStrategyTypeEnum } from "./hyperparametertuningjobstrategytypeenum";
import { TrainingJobStatusCounters } from "./trainingjobstatuscounters";
/**
 * Provides summary information about a hyperparameter tuning job.
**/
export declare class HyperParameterTuningJobSummary extends SpeakeasyBase {
    creationTime: Date;
    hyperParameterTuningEndTime?: Date;
    hyperParameterTuningJobArn: string;
    hyperParameterTuningJobName: string;
    hyperParameterTuningJobStatus: HyperParameterTuningJobStatusEnum;
    lastModifiedTime?: Date;
    objectiveStatusCounters: ObjectiveStatusCounters;
    resourceLimits?: ResourceLimits;
    strategy: HyperParameterTuningJobStrategyTypeEnum;
    trainingJobStatusCounters: TrainingJobStatusCounters;
}
