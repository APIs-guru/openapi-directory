package shared



type InAppMessage struct {
    Content []InAppMessageContent `json:"Content,omitempty"`
    CustomConfig map[string]string `json:"CustomConfig,omitempty"`
    Layout *LayoutEnum `json:"Layout,omitempty"`
    
}

