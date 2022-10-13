package shared

type StartDeviceAuthorizationResponse struct {
	DeviceCode              *string `json:"deviceCode"`
	ExpiresIn               *int64  `json:"expiresIn"`
	Interval                *int64  `json:"interval"`
	UserCode                *string `json:"userCode"`
	VerificationURI         *string `json:"verificationUri"`
	VerificationURIComplete *string `json:"verificationUriComplete"`
}
