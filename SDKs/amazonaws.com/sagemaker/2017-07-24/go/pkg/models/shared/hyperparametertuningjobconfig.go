package shared

// HyperParameterTuningJobConfig
// Configures a hyperparameter tuning job.
type HyperParameterTuningJobConfig struct {
	HyperParameterTuningJobObjective *HyperParameterTuningJobObjective       `json:"HyperParameterTuningJobObjective,omitempty"`
	ParameterRanges                  *ParameterRanges                        `json:"ParameterRanges,omitempty"`
	ResourceLimits                   ResourceLimits                          `json:"ResourceLimits"`
	Strategy                         HyperParameterTuningJobStrategyTypeEnum `json:"Strategy"`
	TrainingJobEarlyStoppingType     *TrainingJobEarlyStoppingTypeEnum       `json:"TrainingJobEarlyStoppingType,omitempty"`
	TuningJobCompletionCriteria      *TuningJobCompletionCriteria            `json:"TuningJobCompletionCriteria,omitempty"`
}
