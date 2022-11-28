package shared

// TextLogSetting
// Defines settings to enable text conversation logs.
type TextLogSetting struct {
	Destination TextLogDestination `json:"destination"`
	Enabled     bool               `json:"enabled"`
}
