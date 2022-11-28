package shared

// OpsEntityItem
// The OpsData summary.
type OpsEntityItem struct {
	CaptureTime *string             `json:"CaptureTime,omitempty"`
	Content     []map[string]string `json:"Content,omitempty"`
}
