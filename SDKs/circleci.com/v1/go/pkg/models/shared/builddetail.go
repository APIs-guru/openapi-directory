package shared

import (
"time")

type BuildDetail struct {
    AllCommitDetails []CommitDetail `json:"all_commit_details,omitempty"`
    Compare *string `json:"compare,omitempty"`
    JobName *string `json:"job_name,omitempty"`
    Node *interface{} `json:"node,omitempty"`
    PreviousSuccessfulBuild *PreviousBuild `json:"previous_successful_build,omitempty"`
    Retries *bool `json:"retries,omitempty"`
    SSHEnabled *bool `json:"ssh_enabled,omitempty"`
    Timedout *bool `json:"timedout,omitempty"`
    UsageQueuedAt *time.Time `json:"usage_queued_at,omitempty"`
    User *User `json:"user,omitempty"`
    
}

