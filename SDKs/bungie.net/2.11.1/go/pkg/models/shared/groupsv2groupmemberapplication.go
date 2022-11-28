package shared

import (
	"time"
)

type GroupsV2GroupMemberApplication struct {
	BungieNetUserInfo      *UserUserInfoCard
	CreationDate           *time.Time
	DestinyUserInfo        *GroupsV2GroupUserInfoCard
	GroupID                *int64
	RequestMessage         *string
	ResolveDate            *time.Time
	ResolveMessage         *string
	ResolveState           *int32
	ResolvedByMembershipID *int64
}
