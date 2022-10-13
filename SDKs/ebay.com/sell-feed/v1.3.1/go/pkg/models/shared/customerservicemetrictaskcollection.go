package shared

type CustomerServiceMetricTaskCollection struct {
	Href   *string              `json:"href"`
	Limit  *int32               `json:"limit"`
	Next   *string              `json:"next"`
	Offset *int32               `json:"offset"`
	Prev   *string              `json:"prev"`
	Tasks  []ServiceMetricsTask `json:"tasks"`
	Total  *int32               `json:"total"`
}
