package shared

type AttributeValue struct {
	B    *string                   `json:"B,omitempty"`
	Bool *bool                     `json:"BOOL,omitempty"`
	Bs   []string                  `json:"BS,omitempty"`
	L    []AttributeValue          `json:"L,omitempty"`
	M    map[string]AttributeValue `json:"M,omitempty"`
	N    *string                   `json:"N,omitempty"`
	Ns   []string                  `json:"NS,omitempty"`
	Null *bool                     `json:"NULL,omitempty"`
	S    *string                   `json:"S,omitempty"`
	Ss   []string                  `json:"SS,omitempty"`
}
