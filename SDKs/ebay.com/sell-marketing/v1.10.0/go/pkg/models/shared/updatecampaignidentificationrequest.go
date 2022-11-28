package shared

// UpdateCampaignIdentificationRequest
// This type specifies the updated name, and start and end dates for an update-campaign request.
type UpdateCampaignIdentificationRequest struct {
	CampaignName *string `json:"campaignName,omitempty"`
	EndDate      *string `json:"endDate,omitempty"`
	StartDate    *string `json:"startDate,omitempty"`
}
