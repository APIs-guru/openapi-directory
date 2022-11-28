package shared

import (
	"time"
)

// ClusterDbRevision
// Describes a <code>ClusterDbRevision</code>.
type ClusterDbRevision struct {
	ClusterIdentifier           *string
	CurrentDatabaseRevision     *string
	DatabaseRevisionReleaseDate *time.Time
	RevisionTargets             []RevisionTarget
}
