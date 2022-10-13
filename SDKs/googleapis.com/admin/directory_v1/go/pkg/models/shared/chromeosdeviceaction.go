package shared

type ChromeOsDeviceAction struct {
	Action            *string `json:"action"`
	DeprovisionReason *string `json:"deprovisionReason"`
}
