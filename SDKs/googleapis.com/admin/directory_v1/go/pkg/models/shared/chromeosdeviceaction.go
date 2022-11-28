package shared

// ChromeOsDeviceAction
// Data about an update to the status of a Chrome OS device.
type ChromeOsDeviceAction struct {
	Action            *string `json:"action,omitempty"`
	DeprovisionReason *string `json:"deprovisionReason,omitempty"`
}
