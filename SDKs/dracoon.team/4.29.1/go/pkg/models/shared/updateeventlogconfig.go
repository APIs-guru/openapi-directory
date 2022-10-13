package shared

type UpdateEventlogConfig struct {
	Enabled         *bool  `json:"enabled"`
	LogIPEnabled    *bool  `json:"logIpEnabled"`
	RetentionPeriod *int32 `json:"retentionPeriod"`
}
