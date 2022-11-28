package shared

import (
	"time"
)

type GroupsV2GroupBan struct {
	BungieNetUserInfo *UserUserInfoCard
	Comment           *string
	CreatedBy         *UserUserInfoCard
	DateBanned        *time.Time
	DateExpires       *time.Time
	DestinyUserInfo   *GroupsV2GroupUserInfoCard
	GroupID           *int64
	LastModifiedBy    *UserUserInfoCard
}
