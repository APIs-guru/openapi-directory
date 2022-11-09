import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=HyperParameterTuningEndTime" })
  hyperParameterTuningEndTime?: Date;

  @Metadata({ data: "json, name=HyperParameterTuningJobArn" })
  hyperParameterTuningJobArn: string;

  @Metadata({ data: "json, name=HyperParameterTuningJobName" })
  hyperParameterTuningJobName: string;

  @Metadata({ data: "json, name=HyperParameterTuningJobStatus" })
  hyperParameterTuningJobStatus: HyperParameterTuningJobStatusEnum;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=ObjectiveStatusCounters" })
  objectiveStatusCounters: ObjectiveStatusCounters;

  @Metadata({ data: "json, name=ResourceLimits" })
  resourceLimits?: ResourceLimits;

  @Metadata({ data: "json, name=Strategy" })
  strategy: HyperParameterTuningJobStrategyTypeEnum;

  @Metadata({ data: "json, name=TrainingJobStatusCounters" })
  trainingJobStatusCounters: TrainingJobStatusCounters;
}
