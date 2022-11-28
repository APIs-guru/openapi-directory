package shared

// UpdateReplicationSetAction
// Details used when updating the replication set.
type UpdateReplicationSetAction struct {
	AddRegionAction    *AddRegionAction    `json:"addRegionAction,omitempty"`
	DeleteRegionAction *DeleteRegionAction `json:"deleteRegionAction,omitempty"`
}
