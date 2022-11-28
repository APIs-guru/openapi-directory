package shared

// NfsOnDeviceServiceConfiguration
// An object that represents metadata and configuration settings for NFS service on an AWS Snow Family device.
type NfsOnDeviceServiceConfiguration struct {
	StorageLimit *int64           `json:"StorageLimit,omitempty"`
	StorageUnit  *StorageUnitEnum `json:"StorageUnit,omitempty"`
}
