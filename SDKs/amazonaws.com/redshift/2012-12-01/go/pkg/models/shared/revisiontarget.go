package shared

import (
	"time"
)

// RevisionTarget
// Describes a <code>RevisionTarget</code>.
type RevisionTarget struct {
	DatabaseRevision            *string
	DatabaseRevisionReleaseDate *time.Time
	Description                 *string
}
