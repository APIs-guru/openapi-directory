package shared

// GetReportsRequest
// The batch request containing multiple report request.
type GetReportsRequest struct {
	ReportRequests    []ReportRequest `json:"reportRequests,omitempty"`
	UseResourceQuotas *bool           `json:"useResourceQuotas,omitempty"`
}
