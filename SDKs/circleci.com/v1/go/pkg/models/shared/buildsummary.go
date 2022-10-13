package shared

import (
	"time"
)

type BuildSummary struct {
	AddedAt     *time.Time   `json:"added_at"`
	BuildNum    *int64       `json:"build_num"`
	Outcome     *OutcomeEnum `json:"outcome"`
	PushedAt    *time.Time   `json:"pushed_at"`
	Status      *StatusEnum  `json:"status"`
	VcsRevision *string      `json:"vcs_revision"`
}
