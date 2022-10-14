package shared

type UpdateReplicationSetAction struct {
	AddRegionAction    *AddRegionAction    `json:"addRegionAction,omitempty"`
	DeleteRegionAction *DeleteRegionAction `json:"deleteRegionAction,omitempty"`
}
