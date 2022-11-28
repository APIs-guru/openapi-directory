package shared

// ReportStatusRequest
// Request report the connector status.
type ReportStatusRequest struct {
	RequestID    *string       `json:"requestId,omitempty"`
	ResourceInfo *ResourceInfo `json:"resourceInfo,omitempty"`
	ValidateOnly *bool         `json:"validateOnly,omitempty"`
}
