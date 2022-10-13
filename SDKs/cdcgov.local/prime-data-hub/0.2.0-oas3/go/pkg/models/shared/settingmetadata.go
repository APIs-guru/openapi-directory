package shared

type SettingMetadata struct {
	CreatedAt *string  `json:"createdAt"`
	CreatedBy *string  `json:"createdBy"`
	Version   *float64 `json:"version"`
}
