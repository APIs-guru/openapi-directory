package shared

import (
	"time"
)

// GroupsV2GroupV2Card
// A small infocard of group information, usually used for when a list of groups are returned
type GroupsV2GroupV2Card struct {
	About            *string
	AvatarPath       *string
	Capabilities     *int32
	ClanInfo         *GroupsV2GroupV2ClanInfo
	CreationDate     *time.Time
	GroupID          *int64
	GroupType        *int32
	Locale           *string
	MemberCount      *int32
	MembershipOption *int32
	Motto            *string
	Name             *string
	Theme            *string
}
