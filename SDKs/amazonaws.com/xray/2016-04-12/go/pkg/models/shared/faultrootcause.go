package shared

type FaultRootCause struct {
	ClientImpacting *bool                   `json:"ClientImpacting"`
	Services        []FaultRootCauseService `json:"Services"`
}
