package shared

// InAppMessageCampaign
// Targeted in-app message campaign.
type InAppMessageCampaign struct {
	CampaignID   *string                `json:"CampaignId,omitempty"`
	DailyCap     *int64                 `json:"DailyCap,omitempty"`
	InAppMessage *InAppMessage          `json:"InAppMessage,omitempty"`
	Priority     *int64                 `json:"Priority,omitempty"`
	Schedule     *InAppCampaignSchedule `json:"Schedule,omitempty"`
	SessionCap   *int64                 `json:"SessionCap,omitempty"`
	TotalCap     *int64                 `json:"TotalCap,omitempty"`
	TreatmentID  *string                `json:"TreatmentId,omitempty"`
}
