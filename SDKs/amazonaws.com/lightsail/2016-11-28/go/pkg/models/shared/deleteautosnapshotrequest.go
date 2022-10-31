package shared

type DeleteAutoSnapshotRequest struct {
	Date         string `json:"date"`
	ResourceName string `json:"resourceName"`
}
