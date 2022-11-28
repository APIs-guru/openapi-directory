package shared

type GroupsV2GroupFeatures struct {
	Capabilities                     *int32
	HostGuidedGamePermissionOverride *int32
	InvitePermissionOverride         *bool
	JoinLevel                        *int32
	MaximumMembers                   *int32
	MaximumMembershipsOfGroupType    *int32
	MembershipTypes                  []int32
	UpdateBannerPermissionOverride   *bool
	UpdateCulturePermissionOverride  *bool
}
