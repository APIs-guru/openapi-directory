package shared

type ProvisionedCapacityDescription struct {
	McuCount    *int64 `json:"mcuCount,omitempty"`
	WorkerCount *int64 `json:"workerCount,omitempty"`
}
