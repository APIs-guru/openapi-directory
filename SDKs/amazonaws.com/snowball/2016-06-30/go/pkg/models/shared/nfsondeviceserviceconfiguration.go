package shared

type NfsOnDeviceServiceConfiguration struct {
	StorageLimit *int64           `json:"StorageLimit,omitempty"`
	StorageUnit  *StorageUnitEnum `json:"StorageUnit,omitempty"`
}
