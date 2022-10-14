package shared

type GetDevicePositionHistoryResponse struct {
	DevicePositions []DevicePosition `json:"DevicePositions"`
	NextToken       *string          `json:"NextToken,omitempty"`
}
