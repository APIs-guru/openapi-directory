package shared

// ProvisionedCapacity
// Details about a connector's provisioned capacity.
type ProvisionedCapacity struct {
	McuCount    int64 `json:"mcuCount"`
	WorkerCount int64 `json:"workerCount"`
}
