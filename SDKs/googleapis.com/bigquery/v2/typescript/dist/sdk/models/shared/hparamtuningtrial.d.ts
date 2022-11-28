import { SpeakeasyBase } from "../../../internal/utils";
import { EvaluationMetrics } from "./evaluationmetrics";
import { TrainingOptions } from "./trainingoptions";
export declare enum HparamTuningTrialStatusEnum {
    TrialStatusUnspecified = "TRIAL_STATUS_UNSPECIFIED",
    NotStarted = "NOT_STARTED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Infeasible = "INFEASIBLE",
    StoppedEarly = "STOPPED_EARLY"
}
/**
 * Training info of a trial in [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models.
**/
export declare class HparamTuningTrial extends SpeakeasyBase {
    endTimeMs?: string;
    errorMessage?: string;
    evalLoss?: number;
    evaluationMetrics?: EvaluationMetrics;
    hparamTuningEvaluationMetrics?: EvaluationMetrics;
    hparams?: TrainingOptions;
    startTimeMs?: string;
    status?: HparamTuningTrialStatusEnum;
    trainingLoss?: number;
    trialId?: string;
}
