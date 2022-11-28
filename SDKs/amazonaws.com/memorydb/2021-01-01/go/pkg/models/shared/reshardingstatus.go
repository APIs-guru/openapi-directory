package shared

// ReshardingStatus
// The status of the online resharding
type ReshardingStatus struct {
	SlotMigration *SlotMigration `json:"SlotMigration,omitempty"`
}
