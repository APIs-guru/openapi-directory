package shared

type ListUsersRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	ServerID   string  `json:"ServerId"`
}
