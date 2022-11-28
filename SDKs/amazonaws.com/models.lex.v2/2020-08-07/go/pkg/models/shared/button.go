package shared

// Button
// Describes a button to use on a response card used to gather slot values from a user.
type Button struct {
	Text  string `json:"text"`
	Value string `json:"value"`
}
