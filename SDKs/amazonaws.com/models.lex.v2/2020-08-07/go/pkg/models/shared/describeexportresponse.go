package shared

import (
	"time"
)

type DescribeExportResponse struct {
	CreationDateTime      *time.Time                   `json:"creationDateTime"`
	DownloadURL           *string                      `json:"downloadUrl"`
	ExportID              *string                      `json:"exportId"`
	ExportStatus          *ExportStatusEnum            `json:"exportStatus"`
	FailureReasons        []string                     `json:"failureReasons"`
	FileFormat            *ImportExportFileFormatEnum  `json:"fileFormat"`
	LastUpdatedDateTime   *time.Time                   `json:"lastUpdatedDateTime"`
	ResourceSpecification *ExportResourceSpecification `json:"resourceSpecification"`
}
