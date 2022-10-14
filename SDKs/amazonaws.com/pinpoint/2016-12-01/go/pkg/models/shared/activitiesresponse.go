package shared

type ActivitiesResponse struct {
	Item      []ActivityResponse `json:"Item"`
	NextToken *string            `json:"NextToken,omitempty"`
}
