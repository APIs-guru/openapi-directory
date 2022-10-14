package shared

type AddOnRequest struct {
	AddOnType                AddOnTypeEnum             `json:"addOnType"`
	AutoSnapshotAddOnRequest *AutoSnapshotAddOnRequest `json:"autoSnapshotAddOnRequest,omitempty"`
}
