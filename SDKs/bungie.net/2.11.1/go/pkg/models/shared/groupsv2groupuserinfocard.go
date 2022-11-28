package shared

type GroupsV2GroupUserInfoCard struct {
	LastSeenDisplayName       *string
	LastSeenDisplayNameType   *int32
	ApplicableMembershipTypes []int32
	CrossSaveOverride         *int32
	DisplayName               *string
	IconPath                  *string
	IsPublic                  *bool
	MembershipID              *int64
	MembershipType            *int32
	SupplementalDisplayName   *string
}
