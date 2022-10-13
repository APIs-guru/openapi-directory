package shared

type ErrorRootCause struct {
	ClientImpacting *bool                   `json:"ClientImpacting"`
	Services        []ErrorRootCauseService `json:"Services"`
}
