package shared

type HyperParameterTuningJobConfig struct {
	HyperParameterTuningJobObjective *HyperParameterTuningJobObjective       `json:"HyperParameterTuningJobObjective"`
	ParameterRanges                  *ParameterRanges                        `json:"ParameterRanges"`
	ResourceLimits                   ResourceLimits                          `json:"ResourceLimits"`
	Strategy                         HyperParameterTuningJobStrategyTypeEnum `json:"Strategy"`
	TrainingJobEarlyStoppingType     *TrainingJobEarlyStoppingTypeEnum       `json:"TrainingJobEarlyStoppingType"`
	TuningJobCompletionCriteria      *TuningJobCompletionCriteria            `json:"TuningJobCompletionCriteria"`
}
