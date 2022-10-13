package shared

type ProvisionedCapacityDescription struct {
	McuCount    *int64 `json:"mcuCount"`
	WorkerCount *int64 `json:"workerCount"`
}
