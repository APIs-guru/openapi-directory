package shared

type ListPagesByContactRequest struct {
	ContactID  string  `json:"ContactId"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
