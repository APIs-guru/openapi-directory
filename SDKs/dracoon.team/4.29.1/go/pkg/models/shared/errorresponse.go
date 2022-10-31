package shared

type ErrorResponse struct {
	Code      int32   `json:"code"`
	DebugInfo *string `json:"debugInfo,omitempty"`
	ErrorCode *int32  `json:"errorCode,omitempty"`
	Message   string  `json:"message"`
}
