import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EvaluationMetrics } from "./evaluationmetrics";
import { TrainingOptions } from "./trainingoptions";


export enum HparamTuningTrialStatusEnum {
    TrialStatusUnspecified = "TRIAL_STATUS_UNSPECIFIED",
    NotStarted = "NOT_STARTED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Infeasible = "INFEASIBLE",
    StoppedEarly = "STOPPED_EARLY"
}


// HparamTuningTrial
/** 
 * Training info of a trial in [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models.
**/
export class HparamTuningTrial extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTimeMs" })
  endTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=evalLoss" })
  evalLoss?: number;

  @SpeakeasyMetadata({ data: "json, name=evaluationMetrics" })
  evaluationMetrics?: EvaluationMetrics;

  @SpeakeasyMetadata({ data: "json, name=hparamTuningEvaluationMetrics" })
  hparamTuningEvaluationMetrics?: EvaluationMetrics;

  @SpeakeasyMetadata({ data: "json, name=hparams" })
  hparams?: TrainingOptions;

  @SpeakeasyMetadata({ data: "json, name=startTimeMs" })
  startTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: HparamTuningTrialStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=trainingLoss" })
  trainingLoss?: number;

  @SpeakeasyMetadata({ data: "json, name=trialId" })
  trialId?: string;
}
