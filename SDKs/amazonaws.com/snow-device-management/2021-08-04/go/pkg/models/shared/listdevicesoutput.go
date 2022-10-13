package shared

type ListDevicesOutput struct {
	Devices   []DeviceSummary `json:"devices"`
	NextToken *string         `json:"nextToken"`
}
