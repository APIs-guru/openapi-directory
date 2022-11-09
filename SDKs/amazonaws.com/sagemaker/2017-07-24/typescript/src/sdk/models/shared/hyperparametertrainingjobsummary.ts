import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FinalHyperParameterTuningJobObjectiveMetric } from "./finalhyperparametertuningjobobjectivemetric";
import { ObjectiveStatusEnum } from "./objectivestatusenum";
import { TrainingJobStatusEnum } from "./trainingjobstatusenum";


// HyperParameterTrainingJobSummary
/** 
 * Specifies summary information about a training job.
**/
export class HyperParameterTrainingJobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=FinalHyperParameterTuningJobObjectiveMetric" })
  finalHyperParameterTuningJobObjectiveMetric?: FinalHyperParameterTuningJobObjectiveMetric;

  @Metadata({ data: "json, name=ObjectiveStatus" })
  objectiveStatus?: ObjectiveStatusEnum;

  @Metadata({ data: "json, name=TrainingEndTime" })
  trainingEndTime?: Date;

  @Metadata({ data: "json, name=TrainingJobArn" })
  trainingJobArn: string;

  @Metadata({ data: "json, name=TrainingJobDefinitionName" })
  trainingJobDefinitionName?: string;

  @Metadata({ data: "json, name=TrainingJobName" })
  trainingJobName: string;

  @Metadata({ data: "json, name=TrainingJobStatus" })
  trainingJobStatus: TrainingJobStatusEnum;

  @Metadata({ data: "json, name=TrainingStartTime" })
  trainingStartTime?: Date;

  @Metadata({ data: "json, name=TunedHyperParameters" })
  tunedHyperParameters: Map<string, string>;

  @Metadata({ data: "json, name=TuningJobName" })
  tuningJobName?: string;
}
