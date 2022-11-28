package shared

// FinalHyperParameterTuningJobObjectiveMetric
// Shows the final value for the objective metric for a training job that was launched by a hyperparameter tuning job. You define the objective metric in the <code>HyperParameterTuningJobObjective</code> parameter of <a>HyperParameterTuningJobConfig</a>.
type FinalHyperParameterTuningJobObjectiveMetric struct {
	MetricName string                                    `json:"MetricName"`
	Type       *HyperParameterTuningJobObjectiveTypeEnum `json:"Type,omitempty"`
	Value      float32                                   `json:"Value"`
}
