package shared



type ReportStatusRequest struct {
    RequestID *string `json:"requestId,omitempty"`
    ResourceInfo *ResourceInfo `json:"resourceInfo,omitempty"`
    ValidateOnly *bool `json:"validateOnly,omitempty"`
    
}

