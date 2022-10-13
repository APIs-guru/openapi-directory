package shared

import (
	"time"
)

type SecretVersionsListEntry struct {
	CreatedDate      *time.Time `json:"CreatedDate"`
	KmsKeyIds        []string   `json:"KmsKeyIds"`
	LastAccessedDate *time.Time `json:"LastAccessedDate"`
	VersionID        *string    `json:"VersionId"`
	VersionStages    []string   `json:"VersionStages"`
}
