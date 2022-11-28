package shared

// DeviceRAM
// Conditions about a device's RAM capabilities.
type DeviceRAM struct {
	MaxBytes *string `json:"maxBytes,omitempty"`
	MinBytes *string `json:"minBytes,omitempty"`
}
