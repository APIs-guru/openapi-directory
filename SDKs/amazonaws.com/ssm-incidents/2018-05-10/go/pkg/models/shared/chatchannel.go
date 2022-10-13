package shared

type ChatChannel struct {
	ChatbotSns []string               `json:"chatbotSns"`
	Empty      map[string]interface{} `json:"empty"`
}
