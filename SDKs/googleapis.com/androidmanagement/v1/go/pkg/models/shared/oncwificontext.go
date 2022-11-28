package shared

// OncWifiContext
// Additional context for non-compliance related to Wi-Fi configuration.
type OncWifiContext struct {
	WifiGUID *string `json:"wifiGuid,omitempty"`
}
