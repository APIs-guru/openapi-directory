package shared

type InAppMessageCampaign struct {
	CampaignID   *string                `json:"CampaignId"`
	DailyCap     *int64                 `json:"DailyCap"`
	InAppMessage *InAppMessage          `json:"InAppMessage"`
	Priority     *int64                 `json:"Priority"`
	Schedule     *InAppCampaignSchedule `json:"Schedule"`
	SessionCap   *int64                 `json:"SessionCap"`
	TotalCap     *int64                 `json:"TotalCap"`
	TreatmentID  *string                `json:"TreatmentId"`
}
