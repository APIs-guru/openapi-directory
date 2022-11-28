package shared

// FaultRootCause
// The root cause information for a trace summary fault.
type FaultRootCause struct {
	ClientImpacting *bool                   `json:"ClientImpacting,omitempty"`
	Services        []FaultRootCauseService `json:"Services,omitempty"`
}
