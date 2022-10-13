package shared

type GetInstancesHealthStatusResponse struct {
	NextToken *string                     `json:"NextToken"`
	Status    map[string]HealthStatusEnum `json:"Status"`
}
