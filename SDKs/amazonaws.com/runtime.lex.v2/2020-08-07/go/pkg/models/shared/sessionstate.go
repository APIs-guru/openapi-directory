package shared

// SessionState
// The state of the user's session with Amazon Lex V2.
type SessionState struct {
	ActiveContexts       []ActiveContext   `json:"activeContexts,omitempty"`
	DialogAction         *DialogAction     `json:"dialogAction,omitempty"`
	Intent               *Intent           `json:"intent,omitempty"`
	OriginatingRequestID *string           `json:"originatingRequestId,omitempty"`
	SessionAttributes    map[string]string `json:"sessionAttributes,omitempty"`
}
