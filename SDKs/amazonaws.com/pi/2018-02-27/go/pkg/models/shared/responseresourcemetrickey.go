package shared

type ResponseResourceMetricKey struct {
	Dimensions map[string]string `json:"Dimensions"`
	Metric     string            `json:"Metric"`
}
