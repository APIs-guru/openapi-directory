package shared



type ClusterPendingUpdates struct {
    AcLs *AcLsUpdateStatus `json:"ACLs,omitempty"`
    Resharding *ReshardingStatus `json:"Resharding,omitempty"`
    ServiceUpdates []PendingModifiedServiceUpdate `json:"ServiceUpdates,omitempty"`
    
}

