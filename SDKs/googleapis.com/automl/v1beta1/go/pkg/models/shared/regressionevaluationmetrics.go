package shared



type RegressionEvaluationMetrics struct {
    MeanAbsoluteError *float32 `json:"meanAbsoluteError,omitempty"`
    MeanAbsolutePercentageError *float32 `json:"meanAbsolutePercentageError,omitempty"`
    RSquared *float32 `json:"rSquared,omitempty"`
    RootMeanSquaredError *float32 `json:"rootMeanSquaredError,omitempty"`
    RootMeanSquaredLogError *float32 `json:"rootMeanSquaredLogError,omitempty"`
    
}

