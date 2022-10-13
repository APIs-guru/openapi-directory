package shared

type RegressionEvaluationMetrics struct {
	MeanAbsoluteError           *float32 `json:"meanAbsoluteError"`
	MeanAbsolutePercentageError *float32 `json:"meanAbsolutePercentageError"`
	RSquared                    *float32 `json:"rSquared"`
	RootMeanSquaredError        *float32 `json:"rootMeanSquaredError"`
	RootMeanSquaredLogError     *float32 `json:"rootMeanSquaredLogError"`
}
