package shared

type DeleteClusterRequest struct {
	ClusterName       string  `json:"ClusterName"`
	FinalSnapshotName *string `json:"FinalSnapshotName,omitempty"`
}
