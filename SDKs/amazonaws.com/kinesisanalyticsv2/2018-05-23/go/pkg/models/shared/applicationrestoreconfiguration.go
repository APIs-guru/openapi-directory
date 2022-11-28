package shared

// ApplicationRestoreConfiguration
// Specifies the method and snapshot to use when restarting an application using previously saved application state.
type ApplicationRestoreConfiguration struct {
	ApplicationRestoreType ApplicationRestoreTypeEnum `json:"ApplicationRestoreType"`
	SnapshotName           *string                    `json:"SnapshotName,omitempty"`
}
