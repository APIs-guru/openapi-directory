package shared

type ListDevicesResponse struct {
	Devices   []DeviceSummary `json:"Devices"`
	NextToken *string         `json:"NextToken"`
}
