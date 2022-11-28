package shared

import (
	"time"
)

type DestinyAdvancedAwaAuthorizationResult struct {
	ActionToken         *string
	DeveloperNote       *string
	MaximumNumberOfUses *int32
	MembershipType      *int32
	ResponseReason      *int32
	Type                *int32
	UserSelection       *int32
	ValidUntil          *time.Time
}
