package shared

// InAppMessagesResponse
// Get in-app messages response object.
type InAppMessagesResponse struct {
	InAppMessageCampaigns []InAppMessageCampaign `json:"InAppMessageCampaigns,omitempty"`
}
