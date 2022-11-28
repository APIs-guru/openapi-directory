package shared

// ErrorRootCause
// The root cause of a trace summary error.
type ErrorRootCause struct {
	ClientImpacting *bool                   `json:"ClientImpacting,omitempty"`
	Services        []ErrorRootCauseService `json:"Services,omitempty"`
}
