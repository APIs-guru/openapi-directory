package shared

// SnapshotErrorMessage
// Describes the errors returned by a snapshot.
type SnapshotErrorMessage struct {
	FailureCode               *string
	FailureReason             *string
	SnapshotClusterIdentifier *string
	SnapshotIdentifier        *string
}
