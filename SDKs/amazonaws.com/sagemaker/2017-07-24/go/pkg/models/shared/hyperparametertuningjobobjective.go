package shared



type HyperParameterTuningJobObjective struct {
    MetricName string `json:"MetricName"`
    Type HyperParameterTuningJobObjectiveTypeEnum `json:"Type"`
    
}

