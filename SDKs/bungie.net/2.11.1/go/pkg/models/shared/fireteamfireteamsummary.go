package shared

import (
	"time"
)

type FireteamFireteamSummary struct {
	ActivityType                *int32
	AlternateSlotCount          *int32
	AvailableAlternateSlotCount *int32
	AvailablePlayerSlotCount    *int32
	DateCreated                 *time.Time
	DateModified                *time.Time
	DatePlayerModified          *time.Time
	FireteamID                  *int64
	GroupID                     *int64
	IsImmediate                 *bool
	IsPublic                    *bool
	IsValid                     *bool
	Locale                      *string
	OwnerMembershipID           *int64
	Platform                    *int64
	PlayerSlotCount             *int32
	ScheduledTime               *time.Time
	Title                       *string
	TitleBeforeModeration       *string
}
