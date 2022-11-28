package shared

// DeviceReport
// Device report updated with the latest app states for managed apps on the device.
type DeviceReport struct {
	AppState                   []AppState `json:"appState,omitempty"`
	LastUpdatedTimestampMillis *string    `json:"lastUpdatedTimestampMillis,omitempty"`
}
