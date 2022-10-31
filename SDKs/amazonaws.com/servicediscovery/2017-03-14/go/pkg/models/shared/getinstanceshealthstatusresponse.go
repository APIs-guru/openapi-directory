package shared

type GetInstancesHealthStatusResponse struct {
	NextToken *string                     `json:"NextToken,omitempty"`
	Status    map[string]HealthStatusEnum `json:"Status,omitempty"`
}
