package shared

import (
"time")

type ExportSummary struct {
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    ExportID *string `json:"exportId,omitempty"`
    ExportStatus *ExportStatusEnum `json:"exportStatus,omitempty"`
    FileFormat *ImportExportFileFormatEnum `json:"fileFormat,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    ResourceSpecification *ExportResourceSpecification `json:"resourceSpecification,omitempty"`
    
}

