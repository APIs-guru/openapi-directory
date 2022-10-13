package shared

type BatchDeleteDevicePositionHistoryError struct {
	DeviceID string         `json:"DeviceId"`
	Error    BatchItemError `json:"Error"`
}
