package shared

type ModelDataQuality struct {
	Constraints *MetricsSource `json:"Constraints"`
	Statistics  *MetricsSource `json:"Statistics"`
}
