package shared

// ImportDataRequest
// Request message for AutoMl.ImportData.
type ImportDataRequest struct {
	InputConfig *InputConfig `json:"inputConfig,omitempty"`
}
