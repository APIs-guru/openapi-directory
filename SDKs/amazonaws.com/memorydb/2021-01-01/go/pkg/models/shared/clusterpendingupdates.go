package shared

// ClusterPendingUpdates
// A list of updates being applied to the cluster
type ClusterPendingUpdates struct {
	AcLs           *AcLsUpdateStatus              `json:"ACLs,omitempty"`
	Resharding     *ReshardingStatus              `json:"Resharding,omitempty"`
	ServiceUpdates []PendingModifiedServiceUpdate `json:"ServiceUpdates,omitempty"`
}
