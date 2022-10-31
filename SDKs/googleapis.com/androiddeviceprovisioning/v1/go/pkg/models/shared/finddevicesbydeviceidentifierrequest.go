package shared



type FindDevicesByDeviceIdentifierRequest struct {
    DeviceIdentifier *DeviceIdentifier `json:"deviceIdentifier,omitempty"`
    Limit *string `json:"limit,omitempty"`
    PageToken *string `json:"pageToken,omitempty"`
    
}

