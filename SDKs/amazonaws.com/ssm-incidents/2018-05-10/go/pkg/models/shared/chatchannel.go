package shared

// ChatChannel
// The AWS Chatbot chat channel used for collaboration during an incident.
type ChatChannel struct {
	ChatbotSns []string               `json:"chatbotSns,omitempty"`
	Empty      map[string]interface{} `json:"empty,omitempty"`
}
