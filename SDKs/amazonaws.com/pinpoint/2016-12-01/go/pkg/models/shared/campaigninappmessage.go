package shared

type CampaignInAppMessage struct {
	Body         *string               `json:"Body"`
	Content      []InAppMessageContent `json:"Content"`
	CustomConfig map[string]string     `json:"CustomConfig"`
	Layout       *LayoutEnum           `json:"Layout"`
}
