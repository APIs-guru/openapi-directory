package shared

type FinalHyperParameterTuningJobObjectiveMetric struct {
	MetricName string                                    `json:"MetricName"`
	Type       *HyperParameterTuningJobObjectiveTypeEnum `json:"Type"`
	Value      float32                                   `json:"Value"`
}
