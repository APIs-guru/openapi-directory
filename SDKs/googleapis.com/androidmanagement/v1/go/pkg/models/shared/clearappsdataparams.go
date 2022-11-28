package shared

// ClearAppsDataParams
// Parameters associated with the CLEAR_APP_DATA command to clear the data of specified apps from the device.
type ClearAppsDataParams struct {
	PackageNames []string `json:"packageNames,omitempty"`
}
