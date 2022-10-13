package shared

type GoalMetricCurrentValueRequest struct {
	CurrentNumberValue *float64 `json:"current_number_value"`
	Gid                *string  `json:"gid"`
	ResourceType       *string  `json:"resource_type"`
}
