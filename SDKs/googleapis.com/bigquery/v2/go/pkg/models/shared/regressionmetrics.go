package shared



type RegressionMetrics struct {
    MeanAbsoluteError *float64 `json:"meanAbsoluteError,omitempty"`
    MeanSquaredError *float64 `json:"meanSquaredError,omitempty"`
    MeanSquaredLogError *float64 `json:"meanSquaredLogError,omitempty"`
    MedianAbsoluteError *float64 `json:"medianAbsoluteError,omitempty"`
    RSquared *float64 `json:"rSquared,omitempty"`
    
}

