package shared

// Button
// Represents an option to be shown on the client platform (Facebook, Slack, etc.)
type Button struct {
	Text  string `json:"text"`
	Value string `json:"value"`
}
