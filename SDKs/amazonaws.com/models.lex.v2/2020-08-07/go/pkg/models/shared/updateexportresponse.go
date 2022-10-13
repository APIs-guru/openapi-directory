package shared

import (
	"time"
)

type UpdateExportResponse struct {
	CreationDateTime      *time.Time                   `json:"creationDateTime"`
	ExportID              *string                      `json:"exportId"`
	ExportStatus          *ExportStatusEnum            `json:"exportStatus"`
	FileFormat            *ImportExportFileFormatEnum  `json:"fileFormat"`
	LastUpdatedDateTime   *time.Time                   `json:"lastUpdatedDateTime"`
	ResourceSpecification *ExportResourceSpecification `json:"resourceSpecification"`
}
