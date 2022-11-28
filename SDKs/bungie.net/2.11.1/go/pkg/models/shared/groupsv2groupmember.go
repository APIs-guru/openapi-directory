package shared

import (
	"time"
)

type GroupsV2GroupMember struct {
	BungieNetUserInfo      *UserUserInfoCard
	DestinyUserInfo        *GroupsV2GroupUserInfoCard
	GroupID                *int64
	IsOnline               *bool
	JoinDate               *time.Time
	LastOnlineStatusChange *int64
	MemberType             *int32
}
