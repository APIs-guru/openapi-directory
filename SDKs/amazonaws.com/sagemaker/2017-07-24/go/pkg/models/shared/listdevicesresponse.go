package shared

type ListDevicesResponse struct {
	DeviceSummaries []DeviceSummary `json:"DeviceSummaries"`
	NextToken       *string         `json:"NextToken,omitempty"`
}
