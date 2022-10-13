package shared

type RegressionMetrics struct {
	MeanAbsoluteError   *float64 `json:"meanAbsoluteError"`
	MeanSquaredError    *float64 `json:"meanSquaredError"`
	MeanSquaredLogError *float64 `json:"meanSquaredLogError"`
	MedianAbsoluteError *float64 `json:"medianAbsoluteError"`
	RSquared            *float64 `json:"rSquared"`
}
