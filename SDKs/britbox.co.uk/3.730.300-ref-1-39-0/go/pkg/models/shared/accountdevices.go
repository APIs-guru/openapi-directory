package shared

type AccountDevices struct {
	DeregistrationWindow *DeviceRegistrationWindow `json:"deregistrationWindow"`
	Devices              []Device                  `json:"devices"`
	MaxRegistered        int32                     `json:"maxRegistered"`
	RegistrationWindow   *DeviceRegistrationWindow `json:"registrationWindow"`
}
