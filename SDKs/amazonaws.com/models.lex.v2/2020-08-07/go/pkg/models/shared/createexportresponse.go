package shared

import (
	"time"
)

type CreateExportResponse struct {
	CreationDateTime      *time.Time                   `json:"creationDateTime"`
	ExportID              *string                      `json:"exportId"`
	ExportStatus          *ExportStatusEnum            `json:"exportStatus"`
	FileFormat            *ImportExportFileFormatEnum  `json:"fileFormat"`
	ResourceSpecification *ExportResourceSpecification `json:"resourceSpecification"`
}
