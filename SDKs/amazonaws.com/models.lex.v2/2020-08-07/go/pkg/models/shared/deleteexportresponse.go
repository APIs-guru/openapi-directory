package shared

type DeleteExportResponse struct {
	ExportID     *string           `json:"exportId,omitempty"`
	ExportStatus *ExportStatusEnum `json:"exportStatus,omitempty"`
}
