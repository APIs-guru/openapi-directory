package shared

import (
	"time"
)

type GroupsV2GroupPotentialMember struct {
	BungieNetUserInfo *UserUserInfoCard
	DestinyUserInfo   *GroupsV2GroupUserInfoCard
	GroupID           *int64
	JoinDate          *time.Time
	PotentialStatus   *int32
}
