package shared

type SessionState struct {
	ActiveContexts       []ActiveContext   `json:"activeContexts"`
	DialogAction         *DialogAction     `json:"dialogAction"`
	Intent               *Intent           `json:"intent"`
	OriginatingRequestID *string           `json:"originatingRequestId"`
	SessionAttributes    map[string]string `json:"sessionAttributes"`
}
