package shared

// UpdateTarget
// A maintenance track that you can switch the current track to.
type UpdateTarget struct {
	DatabaseVersion      *string
	MaintenanceTrackName *string
	SupportedOperations  []SupportedOperation
}
