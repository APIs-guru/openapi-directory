package shared



type GetReportsRequest struct {
    ReportRequests []ReportRequest `json:"reportRequests,omitempty"`
    UseResourceQuotas *bool `json:"useResourceQuotas,omitempty"`
    
}

