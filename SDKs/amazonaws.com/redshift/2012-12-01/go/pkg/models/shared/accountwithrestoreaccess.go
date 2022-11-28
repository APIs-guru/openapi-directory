package shared

// AccountWithRestoreAccess
// Describes an Amazon Web Services account authorized to restore a snapshot.
type AccountWithRestoreAccess struct {
	AccountAlias *string
	AccountID    *string
}
