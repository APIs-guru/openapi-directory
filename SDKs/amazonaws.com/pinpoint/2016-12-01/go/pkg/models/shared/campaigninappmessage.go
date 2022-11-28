package shared

// CampaignInAppMessage
// In-app message configuration.
type CampaignInAppMessage struct {
	Body         *string               `json:"Body,omitempty"`
	Content      []InAppMessageContent `json:"Content,omitempty"`
	CustomConfig map[string]string     `json:"CustomConfig,omitempty"`
	Layout       *LayoutEnum           `json:"Layout,omitempty"`
}
