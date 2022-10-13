package shared

type NfsOnDeviceServiceConfiguration struct {
	StorageLimit *int64           `json:"StorageLimit"`
	StorageUnit  *StorageUnitEnum `json:"StorageUnit"`
}
