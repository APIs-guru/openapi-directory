package shared

type GetExportResponse struct {
	ExportStatus  *ExportStatusEnum `json:"exportStatus"`
	ExportType    *ExportTypeEnum   `json:"exportType"`
	FailureReason *string           `json:"failureReason"`
	Name          *string           `json:"name"`
	ResourceType  *ResourceTypeEnum `json:"resourceType"`
	URL           *string           `json:"url"`
	Version       *string           `json:"version"`
}
