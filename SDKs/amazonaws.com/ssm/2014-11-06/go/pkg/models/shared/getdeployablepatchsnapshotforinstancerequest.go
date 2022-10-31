package shared

type GetDeployablePatchSnapshotForInstanceRequest struct {
	BaselineOverride *BaselineOverride `json:"BaselineOverride,omitempty"`
	InstanceID       string            `json:"InstanceId"`
	SnapshotID       string            `json:"SnapshotId"`
}
