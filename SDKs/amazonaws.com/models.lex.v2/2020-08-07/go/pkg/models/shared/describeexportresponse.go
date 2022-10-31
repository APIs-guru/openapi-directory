package shared

import (
"time")

type DescribeExportResponse struct {
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    DownloadURL *string `json:"downloadUrl,omitempty"`
    ExportID *string `json:"exportId,omitempty"`
    ExportStatus *ExportStatusEnum `json:"exportStatus,omitempty"`
    FailureReasons []string `json:"failureReasons,omitempty"`
    FileFormat *ImportExportFileFormatEnum `json:"fileFormat,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    ResourceSpecification *ExportResourceSpecification `json:"resourceSpecification,omitempty"`
    
}

