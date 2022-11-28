package shared

// ExportModelRequest
// Request message for AutoMl.ExportModel. Models need to be enabled for exporting, otherwise an error code will be returned.
type ExportModelRequest struct {
	OutputConfig *ModelExportOutputConfig `json:"outputConfig,omitempty"`
}
