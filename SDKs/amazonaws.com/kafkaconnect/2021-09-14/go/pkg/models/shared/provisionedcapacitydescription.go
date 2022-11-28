package shared

// ProvisionedCapacityDescription
// The description of a connector's provisioned capacity.
type ProvisionedCapacityDescription struct {
	McuCount    *int64 `json:"mcuCount,omitempty"`
	WorkerCount *int64 `json:"workerCount,omitempty"`
}
