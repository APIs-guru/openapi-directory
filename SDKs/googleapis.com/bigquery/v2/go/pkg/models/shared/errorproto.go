package shared

type ErrorProto struct {
	DebugInfo *string `json:"debugInfo,omitempty"`
	Location  *string `json:"location,omitempty"`
	Message   *string `json:"message,omitempty"`
	Reason    *string `json:"reason,omitempty"`
}
