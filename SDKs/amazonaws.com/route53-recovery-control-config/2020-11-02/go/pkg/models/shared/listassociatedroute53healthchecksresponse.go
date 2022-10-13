package shared

type ListAssociatedRoute53HealthChecksResponse struct {
	HealthCheckIds []string `json:"HealthCheckIds"`
	NextToken      *string  `json:"NextToken"`
}
