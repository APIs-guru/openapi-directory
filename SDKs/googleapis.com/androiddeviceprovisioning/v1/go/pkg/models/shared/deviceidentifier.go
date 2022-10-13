package shared

type DeviceIdentifier struct {
	Imei         *string `json:"imei"`
	Manufacturer *string `json:"manufacturer"`
	Meid         *string `json:"meid"`
	Model        *string `json:"model"`
	SerialNumber *string `json:"serialNumber"`
}
