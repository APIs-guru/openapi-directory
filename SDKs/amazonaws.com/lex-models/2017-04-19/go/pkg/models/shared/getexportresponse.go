package shared



type GetExportResponse struct {
    ExportStatus *ExportStatusEnum `json:"exportStatus,omitempty"`
    ExportType *ExportTypeEnum `json:"exportType,omitempty"`
    FailureReason *string `json:"failureReason,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceType *ResourceTypeEnum `json:"resourceType,omitempty"`
    URL *string `json:"url,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

