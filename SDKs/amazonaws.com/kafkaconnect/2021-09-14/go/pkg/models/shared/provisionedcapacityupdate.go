package shared

// ProvisionedCapacityUpdate
// An update to a connector's fixed capacity.
type ProvisionedCapacityUpdate struct {
	McuCount    int64 `json:"mcuCount"`
	WorkerCount int64 `json:"workerCount"`
}
