package shared

// ReportedOs
// A registered instance's reported operating system.
type ReportedOs struct {
	Family  *string `json:"Family,omitempty"`
	Name    *string `json:"Name,omitempty"`
	Version *string `json:"Version,omitempty"`
}
