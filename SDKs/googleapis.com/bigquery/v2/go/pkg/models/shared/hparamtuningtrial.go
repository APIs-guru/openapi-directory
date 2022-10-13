package shared

type HparamTuningTrialStatusEnum string

const (
	HparamTuningTrialStatusEnumTrialStatusUnspecified HparamTuningTrialStatusEnum = "TRIAL_STATUS_UNSPECIFIED"
	HparamTuningTrialStatusEnumNotStarted             HparamTuningTrialStatusEnum = "NOT_STARTED"
	HparamTuningTrialStatusEnumRunning                HparamTuningTrialStatusEnum = "RUNNING"
	HparamTuningTrialStatusEnumSucceeded              HparamTuningTrialStatusEnum = "SUCCEEDED"
	HparamTuningTrialStatusEnumFailed                 HparamTuningTrialStatusEnum = "FAILED"
	HparamTuningTrialStatusEnumInfeasible             HparamTuningTrialStatusEnum = "INFEASIBLE"
	HparamTuningTrialStatusEnumStoppedEarly           HparamTuningTrialStatusEnum = "STOPPED_EARLY"
)

type HparamTuningTrial struct {
	EndTimeMs                     *string                      `json:"endTimeMs"`
	ErrorMessage                  *string                      `json:"errorMessage"`
	EvalLoss                      *float64                     `json:"evalLoss"`
	EvaluationMetrics             *EvaluationMetrics           `json:"evaluationMetrics"`
	HparamTuningEvaluationMetrics *EvaluationMetrics           `json:"hparamTuningEvaluationMetrics"`
	Hparams                       *TrainingOptions             `json:"hparams"`
	StartTimeMs                   *string                      `json:"startTimeMs"`
	Status                        *HparamTuningTrialStatusEnum `json:"status"`
	TrainingLoss                  *float64                     `json:"trainingLoss"`
	TrialID                       *string                      `json:"trialId"`
}
