package shared

type FaultRootCause struct {
	ClientImpacting *bool                   `json:"ClientImpacting,omitempty"`
	Services        []FaultRootCauseService `json:"Services,omitempty"`
}
