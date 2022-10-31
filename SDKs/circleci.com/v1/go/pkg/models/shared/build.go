package shared

import (
"time")

type Build struct {
    Body *string `json:"body,omitempty"`
    Branch *string `json:"branch,omitempty"`
    BuildTimeMillis *int64 `json:"build_time_millis,omitempty"`
    BuildURL *string `json:"build_url,omitempty"`
    CommitterEmail *string `json:"committer_email,omitempty"`
    CommitterName *string `json:"committer_name,omitempty"`
    DontBuild *string `json:"dont_build,omitempty"`
    Lifecycle *LifecycleEnum `json:"lifecycle,omitempty"`
    Previous *PreviousBuild `json:"previous,omitempty"`
    QueuedAt *time.Time `json:"queued_at,omitempty"`
    Reponame *string `json:"reponame,omitempty"`
    RetryOf *int64 `json:"retry_of,omitempty"`
    StartTime *time.Time `json:"start_time,omitempty"`
    StopTime *time.Time `json:"stop_time,omitempty"`
    Subject *string `json:"subject,omitempty"`
    Username *string `json:"username,omitempty"`
    VcsURL *string `json:"vcs_url,omitempty"`
    Why *string `json:"why,omitempty"`
    
}

