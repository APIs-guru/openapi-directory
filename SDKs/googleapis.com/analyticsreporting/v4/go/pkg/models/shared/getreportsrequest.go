package shared

type GetReportsRequest struct {
	ReportRequests    []ReportRequest `json:"reportRequests"`
	UseResourceQuotas *bool           `json:"useResourceQuotas"`
}
