package shared

type ListSubscribedWorkteamsResponse struct {
	NextToken           *string              `json:"NextToken"`
	SubscribedWorkteams []SubscribedWorkteam `json:"SubscribedWorkteams"`
}
