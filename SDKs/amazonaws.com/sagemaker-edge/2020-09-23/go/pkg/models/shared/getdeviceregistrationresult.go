package shared

type GetDeviceRegistrationResult struct {
	CacheTTL           *string `json:"CacheTTL"`
	DeviceRegistration *string `json:"DeviceRegistration"`
}
