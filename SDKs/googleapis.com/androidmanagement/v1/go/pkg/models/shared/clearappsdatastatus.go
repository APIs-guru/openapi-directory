package shared

// ClearAppsDataStatus
// Status of the CLEAR_APP_DATA command to clear the data of specified apps from the device.
type ClearAppsDataStatus struct {
	Results map[string]PerAppResult `json:"results,omitempty"`
}
