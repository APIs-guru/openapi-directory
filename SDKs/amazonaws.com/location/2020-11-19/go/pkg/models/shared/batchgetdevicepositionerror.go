package shared

// BatchGetDevicePositionError
// Contains error details for each device that didn't return a position.
type BatchGetDevicePositionError struct {
	DeviceID string         `json:"DeviceId"`
	Error    BatchItemError `json:"Error"`
}
