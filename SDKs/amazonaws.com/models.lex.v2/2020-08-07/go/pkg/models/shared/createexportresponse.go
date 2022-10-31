package shared

import (
"time")

type CreateExportResponse struct {
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    ExportID *string `json:"exportId,omitempty"`
    ExportStatus *ExportStatusEnum `json:"exportStatus,omitempty"`
    FileFormat *ImportExportFileFormatEnum `json:"fileFormat,omitempty"`
    ResourceSpecification *ExportResourceSpecification `json:"resourceSpecification,omitempty"`
    
}

