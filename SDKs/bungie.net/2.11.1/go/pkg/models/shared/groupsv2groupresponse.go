package shared

type GroupsV2GroupResponse struct {
	AllianceStatus                           *int32
	AlliedIds                                []int64
	CurrentUserMemberMap                     map[string]GroupsV2GroupMember
	CurrentUserMembershipsInactiveForDestiny *bool
	CurrentUserPotentialMemberMap            map[string]GroupsV2GroupPotentialMember
	Detail                                   *GroupsV2GroupV2
	Founder                                  *GroupsV2GroupMember
	GroupJoinInviteCount                     *int32
	ParentGroup                              *GroupsV2GroupV2
}
