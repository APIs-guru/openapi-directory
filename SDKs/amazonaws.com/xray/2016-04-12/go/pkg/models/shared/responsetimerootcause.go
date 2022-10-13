package shared

type ResponseTimeRootCause struct {
	ClientImpacting *bool                          `json:"ClientImpacting"`
	Services        []ResponseTimeRootCauseService `json:"Services"`
}
