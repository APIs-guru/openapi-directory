import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FinalHyperParameterTuningJobObjectiveMetric } from "./finalhyperparametertuningjobobjectivemetric";
import { ObjectiveStatusEnum } from "./objectivestatusenum";
import { TrainingJobStatusEnum } from "./trainingjobstatusenum";



// HyperParameterTrainingJobSummary
/** 
 * Specifies summary information about a training job.
**/
export class HyperParameterTrainingJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=FinalHyperParameterTuningJobObjectiveMetric" })
  finalHyperParameterTuningJobObjectiveMetric?: FinalHyperParameterTuningJobObjectiveMetric;

  @SpeakeasyMetadata({ data: "json, name=ObjectiveStatus" })
  objectiveStatus?: ObjectiveStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TrainingEndTime" })
  trainingEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TrainingJobArn" })
  trainingJobArn: string;

  @SpeakeasyMetadata({ data: "json, name=TrainingJobDefinitionName" })
  trainingJobDefinitionName?: string;

  @SpeakeasyMetadata({ data: "json, name=TrainingJobName" })
  trainingJobName: string;

  @SpeakeasyMetadata({ data: "json, name=TrainingJobStatus" })
  trainingJobStatus: TrainingJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TrainingStartTime" })
  trainingStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TunedHyperParameters" })
  tunedHyperParameters: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=TuningJobName" })
  tuningJobName?: string;
}
