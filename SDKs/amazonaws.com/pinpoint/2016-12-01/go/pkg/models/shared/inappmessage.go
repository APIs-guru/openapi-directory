package shared

type InAppMessage struct {
	Content      []InAppMessageContent `json:"Content"`
	CustomConfig map[string]string     `json:"CustomConfig"`
	Layout       *LayoutEnum           `json:"Layout"`
}
