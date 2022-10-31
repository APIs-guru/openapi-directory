package shared



type BatchGetDevicePositionError struct {
    DeviceID string `json:"DeviceId"`
    Error BatchItemError `json:"Error"`
    
}

