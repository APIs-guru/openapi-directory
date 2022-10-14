package shared

type ChatChannel struct {
	ChatbotSns []string               `json:"chatbotSns,omitempty"`
	Empty      map[string]interface{} `json:"empty,omitempty"`
}
