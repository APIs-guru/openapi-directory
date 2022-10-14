package shared

type DeviceIdentifier struct {
	Imei         *string `json:"imei,omitempty"`
	Manufacturer *string `json:"manufacturer,omitempty"`
	Meid         *string `json:"meid,omitempty"`
	Model        *string `json:"model,omitempty"`
	SerialNumber *string `json:"serialNumber,omitempty"`
}
