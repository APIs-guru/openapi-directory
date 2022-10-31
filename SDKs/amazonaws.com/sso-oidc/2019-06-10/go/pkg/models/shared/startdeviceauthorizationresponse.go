package shared

type StartDeviceAuthorizationResponse struct {
	DeviceCode              *string `json:"deviceCode,omitempty"`
	ExpiresIn               *int64  `json:"expiresIn,omitempty"`
	Interval                *int64  `json:"interval,omitempty"`
	UserCode                *string `json:"userCode,omitempty"`
	VerificationURI         *string `json:"verificationUri,omitempty"`
	VerificationURIComplete *string `json:"verificationUriComplete,omitempty"`
}
