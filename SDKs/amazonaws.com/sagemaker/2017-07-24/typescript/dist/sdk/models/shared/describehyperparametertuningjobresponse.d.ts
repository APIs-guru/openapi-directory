import { SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTrainingJobSummary } from "./hyperparametertrainingjobsummary";
import { HyperParameterTuningJobConfig } from "./hyperparametertuningjobconfig";
import { HyperParameterTuningJobStatusEnum } from "./hyperparametertuningjobstatusenum";
import { ObjectiveStatusCounters } from "./objectivestatuscounters";
import { HyperParameterTrainingJobDefinition } from "./hyperparametertrainingjobdefinition";
import { TrainingJobStatusCounters } from "./trainingjobstatuscounters";
import { HyperParameterTuningJobWarmStartConfig } from "./hyperparametertuningjobwarmstartconfig";
export declare class DescribeHyperParameterTuningJobResponse extends SpeakeasyBase {
    bestTrainingJob?: HyperParameterTrainingJobSummary;
    creationTime: Date;
    failureReason?: string;
    hyperParameterTuningEndTime?: Date;
    hyperParameterTuningJobArn: string;
    hyperParameterTuningJobConfig: HyperParameterTuningJobConfig;
    hyperParameterTuningJobName: string;
    hyperParameterTuningJobStatus: HyperParameterTuningJobStatusEnum;
    lastModifiedTime?: Date;
    objectiveStatusCounters: ObjectiveStatusCounters;
    overallBestTrainingJob?: HyperParameterTrainingJobSummary;
    trainingJobDefinition?: HyperParameterTrainingJobDefinition;
    trainingJobDefinitions?: HyperParameterTrainingJobDefinition[];
    trainingJobStatusCounters: TrainingJobStatusCounters;
    warmStartConfig?: HyperParameterTuningJobWarmStartConfig;
}
