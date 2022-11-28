package shared

import (
	"time"
)

type ForumPollResult struct {
	AnswerSlot          *int32
	AnswerText          *string
	LastVoteDate        *time.Time
	RequestingUserVoted *bool
	Votes               *int32
}
