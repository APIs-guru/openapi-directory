package shared

import (
	"time"
)

type BuildDetail struct {
	AllCommitDetails        []CommitDetail `json:"all_commit_details"`
	Compare                 *string        `json:"compare"`
	JobName                 *string        `json:"job_name"`
	Node                    *interface{}   `json:"node"`
	PreviousSuccessfulBuild *PreviousBuild `json:"previous_successful_build"`
	Retries                 *bool          `json:"retries"`
	SSHEnabled              *bool          `json:"ssh_enabled"`
	Timedout                *bool          `json:"timedout"`
	UsageQueuedAt           *time.Time     `json:"usage_queued_at"`
	User                    *User          `json:"user"`
}
