package shared

// ActivitiesResponse
// Provides information about the activities that were performed by a campaign.
type ActivitiesResponse struct {
	Item      []ActivityResponse `json:"Item"`
	NextToken *string            `json:"NextToken,omitempty"`
}
