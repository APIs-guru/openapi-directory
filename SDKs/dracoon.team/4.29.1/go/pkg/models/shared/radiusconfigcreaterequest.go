package shared

// RadiusConfigCreateRequest
// Request model for creating a RADIUS configuration
type RadiusConfigCreateRequest struct {
	FailoverServer *FailoverServer `json:"failoverServer,omitempty"`
	IPAddress      string          `json:"ipAddress"`
	OtpPinFirst    *bool           `json:"otpPinFirst,omitempty"`
	Port           int32           `json:"port"`
	SharedSecret   string          `json:"sharedSecret"`
}
