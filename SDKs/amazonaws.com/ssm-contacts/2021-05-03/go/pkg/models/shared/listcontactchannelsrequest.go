package shared

type ListContactChannelsRequest struct {
	ContactID  string  `json:"ContactId"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
