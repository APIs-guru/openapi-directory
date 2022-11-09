import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EvaluationMetrics } from "./evaluationmetrics";
import { EvaluationMetrics } from "./evaluationmetrics";
import { TrainingOptions } from "./trainingoptions";

export enum HparamTuningTrialStatusEnum {
    TrialStatusUnspecified = "TRIAL_STATUS_UNSPECIFIED"
,    NotStarted = "NOT_STARTED"
,    Running = "RUNNING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Infeasible = "INFEASIBLE"
,    StoppedEarly = "STOPPED_EARLY"
}


// HparamTuningTrial
/** 
 * Training info of a trial in [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models.
**/
export class HparamTuningTrial extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTimeMs" })
  endTimeMs?: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=evalLoss" })
  evalLoss?: number;

  @Metadata({ data: "json, name=evaluationMetrics" })
  evaluationMetrics?: EvaluationMetrics;

  @Metadata({ data: "json, name=hparamTuningEvaluationMetrics" })
  hparamTuningEvaluationMetrics?: EvaluationMetrics;

  @Metadata({ data: "json, name=hparams" })
  hparams?: TrainingOptions;

  @Metadata({ data: "json, name=startTimeMs" })
  startTimeMs?: string;

  @Metadata({ data: "json, name=status" })
  status?: HparamTuningTrialStatusEnum;

  @Metadata({ data: "json, name=trainingLoss" })
  trainingLoss?: number;

  @Metadata({ data: "json, name=trialId" })
  trialId?: string;
}
