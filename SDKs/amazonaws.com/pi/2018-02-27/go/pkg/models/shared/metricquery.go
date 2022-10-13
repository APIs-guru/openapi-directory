package shared

type MetricQuery struct {
	Filter  map[string]string `json:"Filter"`
	GroupBy *DimensionGroup   `json:"GroupBy"`
	Metric  string            `json:"Metric"`
}
