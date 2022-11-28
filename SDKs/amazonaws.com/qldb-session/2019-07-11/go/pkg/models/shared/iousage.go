package shared

// IoUsage
// Contains I/O usage metrics for a command that was invoked.
type IoUsage struct {
	ReadIOs  *int64 `json:"ReadIOs,omitempty"`
	WriteIOs *int64 `json:"WriteIOs,omitempty"`
}
