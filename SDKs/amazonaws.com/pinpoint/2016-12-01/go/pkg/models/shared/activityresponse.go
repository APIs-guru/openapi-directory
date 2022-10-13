package shared

type ActivityResponse struct {
	ApplicationID           string  `json:"ApplicationId"`
	CampaignID              string  `json:"CampaignId"`
	End                     *string `json:"End"`
	ID                      string  `json:"Id"`
	Result                  *string `json:"Result"`
	ScheduledStart          *string `json:"ScheduledStart"`
	Start                   *string `json:"Start"`
	State                   *string `json:"State"`
	SuccessfulEndpointCount *int64  `json:"SuccessfulEndpointCount"`
	TimezonesCompletedCount *int64  `json:"TimezonesCompletedCount"`
	TimezonesTotalCount     *int64  `json:"TimezonesTotalCount"`
	TotalEndpointCount      *int64  `json:"TotalEndpointCount"`
	TreatmentID             *string `json:"TreatmentId"`
}
