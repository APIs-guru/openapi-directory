package shared

type ErrorProto struct {
	DebugInfo *string `json:"debugInfo"`
	Location  *string `json:"location"`
	Message   *string `json:"message"`
	Reason    *string `json:"reason"`
}
