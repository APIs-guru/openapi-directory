package shared

// UpdateEventlogConfig
// Request model for updating eventlog settings
type UpdateEventlogConfig struct {
	Enabled         *bool  `json:"enabled,omitempty"`
	LogIPEnabled    *bool  `json:"logIpEnabled,omitempty"`
	RetentionPeriod *int32 `json:"retentionPeriod,omitempty"`
}
