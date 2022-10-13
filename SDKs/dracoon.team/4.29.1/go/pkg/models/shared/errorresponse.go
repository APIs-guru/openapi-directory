package shared

type ErrorResponse struct {
	Code      int32   `json:"code"`
	DebugInfo *string `json:"debugInfo"`
	ErrorCode *int32  `json:"errorCode"`
	Message   string  `json:"message"`
}
