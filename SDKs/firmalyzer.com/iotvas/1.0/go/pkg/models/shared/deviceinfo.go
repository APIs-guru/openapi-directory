package shared

type DeviceInfo struct {
	CveList            []Vulnerability `json:"cve_list"`
	DeviceType         *string         `json:"device_type"`
	FirmwareInfo       *FirmwareInfo   `json:"firmware_info"`
	FirmwareVersion    *string         `json:"firmware_version"`
	IsDiscontinued     *bool           `json:"is_discontinued"`
	LatestFirmwareInfo *FirmwareInfo   `json:"latest_firmware_info"`
	Manufacturer       *string         `json:"manufacturer"`
	ModelName          *string         `json:"model_name"`
}
