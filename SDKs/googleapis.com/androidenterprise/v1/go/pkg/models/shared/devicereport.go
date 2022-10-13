package shared

type DeviceReport struct {
	AppState                   []AppState `json:"appState"`
	LastUpdatedTimestampMillis *string    `json:"lastUpdatedTimestampMillis"`
}
