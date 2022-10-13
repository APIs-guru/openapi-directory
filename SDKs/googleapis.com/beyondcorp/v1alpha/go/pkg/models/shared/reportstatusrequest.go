package shared

type ReportStatusRequest struct {
	RequestID    *string       `json:"requestId"`
	ResourceInfo *ResourceInfo `json:"resourceInfo"`
	ValidateOnly *bool         `json:"validateOnly"`
}
