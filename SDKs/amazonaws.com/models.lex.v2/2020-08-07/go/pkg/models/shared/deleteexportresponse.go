package shared

type DeleteExportResponse struct {
	ExportID     *string           `json:"exportId"`
	ExportStatus *ExportStatusEnum `json:"exportStatus"`
}
