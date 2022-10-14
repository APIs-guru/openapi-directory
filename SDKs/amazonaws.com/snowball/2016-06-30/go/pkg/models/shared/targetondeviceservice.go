package shared

type TargetOnDeviceService struct {
	ServiceName    *DeviceServiceNameEnum `json:"ServiceName,omitempty"`
	TransferOption *TransferOptionEnum    `json:"TransferOption,omitempty"`
}
