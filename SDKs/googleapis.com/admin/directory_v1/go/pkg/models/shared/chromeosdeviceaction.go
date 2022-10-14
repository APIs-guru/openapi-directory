package shared

type ChromeOsDeviceAction struct {
	Action            *string `json:"action,omitempty"`
	DeprovisionReason *string `json:"deprovisionReason,omitempty"`
}
