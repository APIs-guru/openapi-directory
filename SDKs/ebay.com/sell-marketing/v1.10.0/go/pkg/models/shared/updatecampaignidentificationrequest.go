package shared

type UpdateCampaignIdentificationRequest struct {
	CampaignName *string `json:"campaignName"`
	EndDate      *string `json:"endDate"`
	StartDate    *string `json:"startDate"`
}
