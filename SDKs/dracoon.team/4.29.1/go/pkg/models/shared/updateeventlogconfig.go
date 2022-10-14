package shared

type UpdateEventlogConfig struct {
	Enabled         *bool  `json:"enabled,omitempty"`
	LogIPEnabled    *bool  `json:"logIpEnabled,omitempty"`
	RetentionPeriod *int32 `json:"retentionPeriod,omitempty"`
}
