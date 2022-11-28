package shared

// RadiusConfig
// RADIUS configuration
type RadiusConfig struct {
	FailoverServer *FailoverServer `json:"failoverServer,omitempty"`
	IPAddress      string          `json:"ipAddress"`
	OtpPinFirst    bool            `json:"otpPinFirst"`
	Port           int32           `json:"port"`
	SharedSecret   string          `json:"sharedSecret"`
}
