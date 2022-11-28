package shared

type UserUserMembershipData struct {
	BungieNetUser       *UserGeneralUser
	DestinyMemberships  []GroupsV2GroupUserInfoCard
	PrimaryMembershipID *int64
}
