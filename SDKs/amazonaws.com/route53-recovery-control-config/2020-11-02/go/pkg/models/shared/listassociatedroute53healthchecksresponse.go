package shared

type ListAssociatedRoute53HealthChecksResponse struct {
	HealthCheckIds []string `json:"HealthCheckIds,omitempty"`
	NextToken      *string  `json:"NextToken,omitempty"`
}
