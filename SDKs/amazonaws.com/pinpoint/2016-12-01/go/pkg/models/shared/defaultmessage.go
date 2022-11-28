package shared

// DefaultMessage
// Specifies the default message for all channels.
type DefaultMessage struct {
	Body          *string             `json:"Body,omitempty"`
	Substitutions map[string][]string `json:"Substitutions,omitempty"`
}
