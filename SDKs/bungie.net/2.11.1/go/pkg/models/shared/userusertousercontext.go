package shared

import (
	"time"
)

type UserUserToUserContext struct {
	GlobalIgnoreEndDate *time.Time
	IgnoreStatus        *IgnoresIgnoreResponse
	IsFollowing         *bool
}
