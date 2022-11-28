package shared

import (
	"time"
)

type GroupsV2GroupV2 struct {
	About                              *string
	AllowChat                          *bool
	AvatarImageIndex                   *int32
	AvatarPath                         *string
	BanExpireDate                      *time.Time
	BannerPath                         *string
	ChatSecurity                       *int32
	ClanInfo                           *GroupsV2GroupV2ClanInfoAndInvestment
	ConversationID                     *int64
	CreationDate                       *time.Time
	DefaultPublicity                   *int32
	EnableInvitationMessagingForAdmins *bool
	Features                           *GroupsV2GroupFeatures
	GroupID                            *int64
	GroupType                          *int32
	Homepage                           *int32
	IsDefaultPostPublic                *bool
	IsPublic                           *bool
	IsPublicTopicAdminOnly             *bool
	Locale                             *string
	MemberCount                        *int32
	MembershipIDCreated                *int64
	MembershipOption                   *int32
	ModificationDate                   *time.Time
	Motto                              *string
	Name                               *string
	Tags                               []string
	Theme                              *string
}
