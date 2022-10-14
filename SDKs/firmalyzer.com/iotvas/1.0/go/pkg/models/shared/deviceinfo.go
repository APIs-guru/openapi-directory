package shared

type DeviceInfo struct {
	CveList            []Vulnerability `json:"cve_list,omitempty"`
	DeviceType         *string         `json:"device_type,omitempty"`
	FirmwareInfo       *FirmwareInfo   `json:"firmware_info,omitempty"`
	FirmwareVersion    *string         `json:"firmware_version,omitempty"`
	IsDiscontinued     *bool           `json:"is_discontinued,omitempty"`
	LatestFirmwareInfo *FirmwareInfo   `json:"latest_firmware_info,omitempty"`
	Manufacturer       *string         `json:"manufacturer,omitempty"`
	ModelName          *string         `json:"model_name,omitempty"`
}
