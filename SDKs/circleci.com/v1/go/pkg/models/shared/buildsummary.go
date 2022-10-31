package shared

import (
"time")

type BuildSummary struct {
    AddedAt *time.Time `json:"added_at,omitempty"`
    BuildNum *int64 `json:"build_num,omitempty"`
    Outcome *OutcomeEnum `json:"outcome,omitempty"`
    PushedAt *time.Time `json:"pushed_at,omitempty"`
    Status *StatusEnum `json:"status,omitempty"`
    VcsRevision *string `json:"vcs_revision,omitempty"`
    
}

