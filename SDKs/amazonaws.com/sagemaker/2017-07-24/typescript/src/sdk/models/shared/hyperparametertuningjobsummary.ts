import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTuningJobStatusEnum } from "./hyperparametertuningjobstatusenum";
import { ObjectiveStatusCounters } from "./objectivestatuscounters";
import { ResourceLimits } from "./resourcelimits";
import { HyperParameterTuningJobStrategyTypeEnum } from "./hyperparametertuningjobstrategytypeenum";
import { TrainingJobStatusCounters } from "./trainingjobstatuscounters";



// HyperParameterTuningJobSummary
/** 
 * Provides summary information about a hyperparameter tuning job.
**/
export class HyperParameterTuningJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=HyperParameterTuningEndTime" })
  hyperParameterTuningEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobArn" })
  hyperParameterTuningJobArn: string;

  @SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobName" })
  hyperParameterTuningJobName: string;

  @SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobStatus" })
  hyperParameterTuningJobStatus: HyperParameterTuningJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ObjectiveStatusCounters" })
  objectiveStatusCounters: ObjectiveStatusCounters;

  @SpeakeasyMetadata({ data: "json, name=ResourceLimits" })
  resourceLimits?: ResourceLimits;

  @SpeakeasyMetadata({ data: "json, name=Strategy" })
  strategy: HyperParameterTuningJobStrategyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TrainingJobStatusCounters" })
  trainingJobStatusCounters: TrainingJobStatusCounters;
}
