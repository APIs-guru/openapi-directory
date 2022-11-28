package shared

// InAppMessage
// Provides all fields required for building an in-app message.
type InAppMessage struct {
	Content      []InAppMessageContent `json:"Content,omitempty"`
	CustomConfig map[string]string     `json:"CustomConfig,omitempty"`
	Layout       *LayoutEnum           `json:"Layout,omitempty"`
}
