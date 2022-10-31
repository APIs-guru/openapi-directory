package shared

type ListSubscribedWorkteamsResponse struct {
	NextToken           *string              `json:"NextToken,omitempty"`
	SubscribedWorkteams []SubscribedWorkteam `json:"SubscribedWorkteams"`
}
