package shared

type ModelQuality struct {
	Constraints *MetricsSource `json:"Constraints"`
	Statistics  *MetricsSource `json:"Statistics"`
}
