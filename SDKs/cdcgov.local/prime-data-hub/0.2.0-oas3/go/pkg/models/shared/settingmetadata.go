package shared

// SettingMetadata
// The metadata associated with an setting
type SettingMetadata struct {
	CreatedAt *string  `json:"createdAt,omitempty"`
	CreatedBy *string  `json:"createdBy,omitempty"`
	Version   *float64 `json:"version,omitempty"`
}
