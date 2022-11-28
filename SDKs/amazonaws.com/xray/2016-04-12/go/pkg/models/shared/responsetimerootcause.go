package shared

// ResponseTimeRootCause
// The root cause information for a response time warning.
type ResponseTimeRootCause struct {
	ClientImpacting *bool                          `json:"ClientImpacting,omitempty"`
	Services        []ResponseTimeRootCauseService `json:"Services,omitempty"`
}
