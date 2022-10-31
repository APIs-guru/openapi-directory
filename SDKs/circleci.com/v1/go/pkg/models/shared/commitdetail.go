package shared

import (
"time")

type CommitDetail struct {
    AuthorDate *time.Time `json:"author_date,omitempty"`
    AuthorEmail *string `json:"author_email,omitempty"`
    AuthorLogin *string `json:"author_login,omitempty"`
    AuthorName *string `json:"author_name,omitempty"`
    Body *string `json:"body,omitempty"`
    Commit *string `json:"commit,omitempty"`
    CommitURL *string `json:"commit_url,omitempty"`
    CommitterDate *time.Time `json:"committer_date,omitempty"`
    CommitterEmail *string `json:"committer_email,omitempty"`
    CommitterLogin *string `json:"committer_login,omitempty"`
    CommitterName *string `json:"committer_name,omitempty"`
    Subject *string `json:"subject,omitempty"`
    
}

