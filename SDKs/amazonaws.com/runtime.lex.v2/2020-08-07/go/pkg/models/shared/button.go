package shared

// Button
// A button that appears on a response card show to the user.
type Button struct {
	Text  string `json:"text"`
	Value string `json:"value"`
}
