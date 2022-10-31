package shared

type Example112 struct {
	DeviceClass      int32  `json:"device_class"`
	DeviceType       int32  `json:"device_type"`
	ExpectedProfiles int32  `json:"expected_profiles"`
	MacAddress       string `json:"mac_address"`
	Name             string `json:"name"`
	Rssi             int32  `json:"rssi"`
}
