package shared



type AccountDevices struct {
    DeregistrationWindow *DeviceRegistrationWindow `json:"deregistrationWindow,omitempty"`
    Devices []Device `json:"devices"`
    MaxRegistered int32 `json:"maxRegistered"`
    RegistrationWindow *DeviceRegistrationWindow `json:"registrationWindow,omitempty"`
    
}

