import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTrainingJobSummary } from "./hyperparametertrainingjobsummary";
import { HyperParameterTuningJobConfig } from "./hyperparametertuningjobconfig";
import { HyperParameterTuningJobStatusEnum } from "./hyperparametertuningjobstatusenum";
import { ObjectiveStatusCounters } from "./objectivestatuscounters";
import { HyperParameterTrainingJobDefinition } from "./hyperparametertrainingjobdefinition";
import { TrainingJobStatusCounters } from "./trainingjobstatuscounters";
import { HyperParameterTuningJobWarmStartConfig } from "./hyperparametertuningjobwarmstartconfig";



export class DescribeHyperParameterTuningJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BestTrainingJob" })
  bestTrainingJob?: HyperParameterTrainingJobSummary;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=HyperParameterTuningEndTime" })
  hyperParameterTuningEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobArn" })
  hyperParameterTuningJobArn: string;

  @SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobConfig" })
  hyperParameterTuningJobConfig: HyperParameterTuningJobConfig;

  @SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobName" })
  hyperParameterTuningJobName: string;

  @SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobStatus" })
  hyperParameterTuningJobStatus: HyperParameterTuningJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ObjectiveStatusCounters" })
  objectiveStatusCounters: ObjectiveStatusCounters;

  @SpeakeasyMetadata({ data: "json, name=OverallBestTrainingJob" })
  overallBestTrainingJob?: HyperParameterTrainingJobSummary;

  @SpeakeasyMetadata({ data: "json, name=TrainingJobDefinition" })
  trainingJobDefinition?: HyperParameterTrainingJobDefinition;

  @SpeakeasyMetadata({ data: "json, name=TrainingJobDefinitions", elemType: HyperParameterTrainingJobDefinition })
  trainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  @SpeakeasyMetadata({ data: "json, name=TrainingJobStatusCounters" })
  trainingJobStatusCounters: TrainingJobStatusCounters;

  @SpeakeasyMetadata({ data: "json, name=WarmStartConfig" })
  warmStartConfig?: HyperParameterTuningJobWarmStartConfig;
}
