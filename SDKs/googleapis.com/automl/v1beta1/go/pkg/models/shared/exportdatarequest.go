package shared

// ExportDataRequest
// Request message for AutoMl.ExportData.
type ExportDataRequest struct {
	OutputConfig *OutputConfig `json:"outputConfig,omitempty"`
}
