package shared

type GetDeployablePatchSnapshotForInstanceRequest struct {
	BaselineOverride *BaselineOverride `json:"BaselineOverride"`
	InstanceID       string            `json:"InstanceId"`
	SnapshotID       string            `json:"SnapshotId"`
}
