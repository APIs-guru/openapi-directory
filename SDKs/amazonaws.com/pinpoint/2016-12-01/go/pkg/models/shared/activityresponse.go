package shared

// ActivityResponse
// Provides information about an activity that was performed by a campaign.
type ActivityResponse struct {
	ApplicationID           string  `json:"ApplicationId"`
	CampaignID              string  `json:"CampaignId"`
	End                     *string `json:"End,omitempty"`
	ID                      string  `json:"Id"`
	Result                  *string `json:"Result,omitempty"`
	ScheduledStart          *string `json:"ScheduledStart,omitempty"`
	Start                   *string `json:"Start,omitempty"`
	State                   *string `json:"State,omitempty"`
	SuccessfulEndpointCount *int64  `json:"SuccessfulEndpointCount,omitempty"`
	TimezonesCompletedCount *int64  `json:"TimezonesCompletedCount,omitempty"`
	TimezonesTotalCount     *int64  `json:"TimezonesTotalCount,omitempty"`
	TotalEndpointCount      *int64  `json:"TotalEndpointCount,omitempty"`
	TreatmentID             *string `json:"TreatmentId,omitempty"`
}
