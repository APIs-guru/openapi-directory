package shared

type ListDeviceFleetsResponse struct {
	DeviceFleetSummaries []DeviceFleetSummary `json:"DeviceFleetSummaries"`
	NextToken            *string              `json:"NextToken"`
}
