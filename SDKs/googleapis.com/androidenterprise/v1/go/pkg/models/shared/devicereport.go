package shared

type DeviceReport struct {
	AppState                   []AppState `json:"appState,omitempty"`
	LastUpdatedTimestampMillis *string    `json:"lastUpdatedTimestampMillis,omitempty"`
}
