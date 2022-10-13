package shared

import (
	"time"
)

type CommitDetail struct {
	AuthorDate     *time.Time `json:"author_date"`
	AuthorEmail    *string    `json:"author_email"`
	AuthorLogin    *string    `json:"author_login"`
	AuthorName     *string    `json:"author_name"`
	Body           *string    `json:"body"`
	Commit         *string    `json:"commit"`
	CommitURL      *string    `json:"commit_url"`
	CommitterDate  *time.Time `json:"committer_date"`
	CommitterEmail *string    `json:"committer_email"`
	CommitterLogin *string    `json:"committer_login"`
	CommitterName  *string    `json:"committer_name"`
	Subject        *string    `json:"subject"`
}
