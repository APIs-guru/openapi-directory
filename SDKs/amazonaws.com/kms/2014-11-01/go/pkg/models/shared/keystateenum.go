package shared

type KeyStateEnum string

const (
	KeyStateEnumCreating               KeyStateEnum = "Creating"
	KeyStateEnumEnabled                KeyStateEnum = "Enabled"
	KeyStateEnumDisabled               KeyStateEnum = "Disabled"
	KeyStateEnumPendingDeletion        KeyStateEnum = "PendingDeletion"
	KeyStateEnumPendingImport          KeyStateEnum = "PendingImport"
	KeyStateEnumPendingReplicaDeletion KeyStateEnum = "PendingReplicaDeletion"
	KeyStateEnumUnavailable            KeyStateEnum = "Unavailable"
	KeyStateEnumUpdating               KeyStateEnum = "Updating"
)
