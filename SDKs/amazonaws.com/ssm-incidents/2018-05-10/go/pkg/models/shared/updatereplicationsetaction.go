package shared

type UpdateReplicationSetAction struct {
	AddRegionAction    *AddRegionAction    `json:"addRegionAction"`
	DeleteRegionAction *DeleteRegionAction `json:"deleteRegionAction"`
}
