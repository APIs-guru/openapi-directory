package shared

import (
	"time"
)

// SecretVersionsListEntry
// A structure that contains information about one version of a secret.
type SecretVersionsListEntry struct {
	CreatedDate      *time.Time `json:"CreatedDate,omitempty"`
	KmsKeyIds        []string   `json:"KmsKeyIds,omitempty"`
	LastAccessedDate *time.Time `json:"LastAccessedDate,omitempty"`
	VersionID        *string    `json:"VersionId,omitempty"`
	VersionStages    []string   `json:"VersionStages,omitempty"`
}
