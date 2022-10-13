package shared

type ReportRowMetricValue struct {
	DoubleValue  *float64 `json:"doubleValue"`
	IntegerValue *string  `json:"integerValue"`
	MicrosValue  *string  `json:"microsValue"`
}
