package shared



type RadiusConfigUpdateRequest struct {
    FailoverServer *FailoverServer `json:"failoverServer,omitempty"`
    IPAddress *string `json:"ipAddress,omitempty"`
    OtpPinFirst *bool `json:"otpPinFirst,omitempty"`
    Port *int32 `json:"port,omitempty"`
    SharedSecret *string `json:"sharedSecret,omitempty"`
    
}

