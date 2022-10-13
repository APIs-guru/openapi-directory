package shared

import (
	"time"
)

type Build struct {
	Body            *string        `json:"body"`
	Branch          *string        `json:"branch"`
	BuildTimeMillis *int64         `json:"build_time_millis"`
	BuildURL        *string        `json:"build_url"`
	CommitterEmail  *string        `json:"committer_email"`
	CommitterName   *string        `json:"committer_name"`
	DontBuild       *string        `json:"dont_build"`
	Lifecycle       *LifecycleEnum `json:"lifecycle"`
	Previous        *PreviousBuild `json:"previous"`
	QueuedAt        *time.Time     `json:"queued_at"`
	Reponame        *string        `json:"reponame"`
	RetryOf         *int64         `json:"retry_of"`
	StartTime       *time.Time     `json:"start_time"`
	StopTime        *time.Time     `json:"stop_time"`
	Subject         *string        `json:"subject"`
	Username        *string        `json:"username"`
	VcsURL          *string        `json:"vcs_url"`
	Why             *string        `json:"why"`
}
