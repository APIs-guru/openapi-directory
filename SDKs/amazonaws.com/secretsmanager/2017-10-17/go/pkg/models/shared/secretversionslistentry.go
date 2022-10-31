package shared

import (
"time")

type SecretVersionsListEntry struct {
    CreatedDate *time.Time `json:"CreatedDate,omitempty"`
    KmsKeyIds []string `json:"KmsKeyIds,omitempty"`
    LastAccessedDate *time.Time `json:"LastAccessedDate,omitempty"`
    VersionID *string `json:"VersionId,omitempty"`
    VersionStages []string `json:"VersionStages,omitempty"`
    
}

