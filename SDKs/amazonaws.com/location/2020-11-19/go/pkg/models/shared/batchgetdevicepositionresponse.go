package shared

type BatchGetDevicePositionResponse struct {
	DevicePositions []DevicePosition              `json:"DevicePositions"`
	Errors          []BatchGetDevicePositionError `json:"Errors"`
}
