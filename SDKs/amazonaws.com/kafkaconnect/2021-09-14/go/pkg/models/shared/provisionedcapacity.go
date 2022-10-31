package shared

type ProvisionedCapacity struct {
	McuCount    int64 `json:"mcuCount"`
	WorkerCount int64 `json:"workerCount"`
}
