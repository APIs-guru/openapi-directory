package shared

// BatchDeleteDevicePositionHistoryError
// Contains the tracker resource details.
type BatchDeleteDevicePositionHistoryError struct {
	DeviceID string         `json:"DeviceId"`
	Error    BatchItemError `json:"Error"`
}
