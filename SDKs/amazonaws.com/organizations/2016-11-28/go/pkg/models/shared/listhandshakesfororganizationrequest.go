package shared

type ListHandshakesForOrganizationRequest struct {
	Filter     *HandshakeFilter `json:"Filter"`
	MaxResults *int64           `json:"MaxResults"`
	NextToken  *string          `json:"NextToken"`
}
