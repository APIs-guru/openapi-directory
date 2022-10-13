package shared

type ListSubscribedWorkteamsRequest struct {
	MaxResults   *int64  `json:"MaxResults"`
	NameContains *string `json:"NameContains"`
	NextToken    *string `json:"NextToken"`
}
