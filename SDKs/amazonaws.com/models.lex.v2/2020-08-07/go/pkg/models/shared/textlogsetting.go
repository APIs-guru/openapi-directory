package shared

type TextLogSetting struct {
	Destination TextLogDestination `json:"destination"`
	Enabled     bool               `json:"enabled"`
}
