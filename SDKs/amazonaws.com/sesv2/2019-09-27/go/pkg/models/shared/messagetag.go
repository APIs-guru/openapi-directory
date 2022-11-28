package shared

// MessageTag
// Contains the name and value of a tag that you apply to an email. You can use message tags when you publish email sending events.
type MessageTag struct {
	Name  string `json:"Name"`
	Value string `json:"Value"`
}
