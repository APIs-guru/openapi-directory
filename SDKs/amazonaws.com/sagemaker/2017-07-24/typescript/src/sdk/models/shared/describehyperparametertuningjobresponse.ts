import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HyperParameterTrainingJobSummary } from "./hyperparametertrainingjobsummary";
import { HyperParameterTuningJobConfig } from "./hyperparametertuningjobconfig";
import { HyperParameterTuningJobStatusEnum } from "./hyperparametertuningjobstatusenum";
import { ObjectiveStatusCounters } from "./objectivestatuscounters";
import { HyperParameterTrainingJobSummary } from "./hyperparametertrainingjobsummary";
import { HyperParameterTrainingJobDefinition } from "./hyperparametertrainingjobdefinition";
import { HyperParameterTrainingJobDefinition } from "./hyperparametertrainingjobdefinition";
import { TrainingJobStatusCounters } from "./trainingjobstatuscounters";
import { HyperParameterTuningJobWarmStartConfig } from "./hyperparametertuningjobwarmstartconfig";


export class DescribeHyperParameterTuningJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BestTrainingJob" })
  bestTrainingJob?: HyperParameterTrainingJobSummary;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=HyperParameterTuningEndTime" })
  hyperParameterTuningEndTime?: Date;

  @Metadata({ data: "json, name=HyperParameterTuningJobArn" })
  hyperParameterTuningJobArn: string;

  @Metadata({ data: "json, name=HyperParameterTuningJobConfig" })
  hyperParameterTuningJobConfig: HyperParameterTuningJobConfig;

  @Metadata({ data: "json, name=HyperParameterTuningJobName" })
  hyperParameterTuningJobName: string;

  @Metadata({ data: "json, name=HyperParameterTuningJobStatus" })
  hyperParameterTuningJobStatus: HyperParameterTuningJobStatusEnum;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=ObjectiveStatusCounters" })
  objectiveStatusCounters: ObjectiveStatusCounters;

  @Metadata({ data: "json, name=OverallBestTrainingJob" })
  overallBestTrainingJob?: HyperParameterTrainingJobSummary;

  @Metadata({ data: "json, name=TrainingJobDefinition" })
  trainingJobDefinition?: HyperParameterTrainingJobDefinition;

  @Metadata({ data: "json, name=TrainingJobDefinitions", elemType: shared.HyperParameterTrainingJobDefinition })
  trainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  @Metadata({ data: "json, name=TrainingJobStatusCounters" })
  trainingJobStatusCounters: TrainingJobStatusCounters;

  @Metadata({ data: "json, name=WarmStartConfig" })
  warmStartConfig?: HyperParameterTuningJobWarmStartConfig;
}
