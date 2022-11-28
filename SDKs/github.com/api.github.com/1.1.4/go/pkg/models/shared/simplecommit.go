package shared

import (
	"time"
)

type SimpleCommitAuthor struct {
	Email string `json:"email"`
	Name  string `json:"name"`
}

type SimpleCommitCommitter struct {
	Email string `json:"email"`
	Name  string `json:"name"`
}

// SimpleCommit
// Simple Commit
type SimpleCommit struct {
	Author    SimpleCommitAuthor    `json:"author"`
	Committer SimpleCommitCommitter `json:"committer"`
	ID        string                `json:"id"`
	Message   string                `json:"message"`
	Timestamp time.Time             `json:"timestamp"`
	TreeID    string                `json:"tree_id"`
}
