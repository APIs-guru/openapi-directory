package shared

import (
	"time"
)

// CodeRepositorySummary
// Specifies summary information about a Git repository.
type CodeRepositorySummary struct {
	CodeRepositoryArn  string     `json:"CodeRepositoryArn"`
	CodeRepositoryName string     `json:"CodeRepositoryName"`
	CreationTime       time.Time  `json:"CreationTime"`
	GitConfig          *GitConfig `json:"GitConfig,omitempty"`
	LastModifiedTime   time.Time  `json:"LastModifiedTime"`
}
