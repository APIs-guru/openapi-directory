package shared

// TargetOnDeviceService
// An object that represents the service or services on the Snow Family device that your transferred data will be exported from or imported into. AWS Snow Family supports Amazon S3 and NFS (Network File System).
type TargetOnDeviceService struct {
	ServiceName    *DeviceServiceNameEnum `json:"ServiceName,omitempty"`
	TransferOption *TransferOptionEnum    `json:"TransferOption,omitempty"`
}
