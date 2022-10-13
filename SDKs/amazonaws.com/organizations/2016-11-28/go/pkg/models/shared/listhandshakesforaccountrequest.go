package shared

type ListHandshakesForAccountRequest struct {
	Filter     *HandshakeFilter `json:"Filter"`
	MaxResults *int64           `json:"MaxResults"`
	NextToken  *string          `json:"NextToken"`
}
