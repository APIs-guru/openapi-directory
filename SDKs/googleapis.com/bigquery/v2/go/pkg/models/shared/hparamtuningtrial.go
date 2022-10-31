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
	EndTimeMs                     *string                      `json:"endTimeMs,omitempty"`
	ErrorMessage                  *string                      `json:"errorMessage,omitempty"`
	EvalLoss                      *float64                     `json:"evalLoss,omitempty"`
	EvaluationMetrics             *EvaluationMetrics           `json:"evaluationMetrics,omitempty"`
	HparamTuningEvaluationMetrics *EvaluationMetrics           `json:"hparamTuningEvaluationMetrics,omitempty"`
	Hparams                       *TrainingOptions             `json:"hparams,omitempty"`
	StartTimeMs                   *string                      `json:"startTimeMs,omitempty"`
	Status                        *HparamTuningTrialStatusEnum `json:"status,omitempty"`
	TrainingLoss                  *float64                     `json:"trainingLoss,omitempty"`
	TrialID                       *string                      `json:"trialId,omitempty"`
}
