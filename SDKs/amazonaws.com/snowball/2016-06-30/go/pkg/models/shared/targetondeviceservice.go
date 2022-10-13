package shared

type TargetOnDeviceService struct {
	ServiceName    *DeviceServiceNameEnum `json:"ServiceName"`
	TransferOption *TransferOptionEnum    `json:"TransferOption"`
}
