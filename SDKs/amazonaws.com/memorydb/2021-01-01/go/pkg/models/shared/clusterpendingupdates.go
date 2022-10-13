package shared

type ClusterPendingUpdates struct {
	AcLs           *AcLsUpdateStatus              `json:"ACLs"`
	Resharding     *ReshardingStatus              `json:"Resharding"`
	ServiceUpdates []PendingModifiedServiceUpdate `json:"ServiceUpdates"`
}
