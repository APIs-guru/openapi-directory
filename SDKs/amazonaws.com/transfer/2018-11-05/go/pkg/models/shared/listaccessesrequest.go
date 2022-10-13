package shared

type ListAccessesRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	ServerID   string  `json:"ServerId"`
}
