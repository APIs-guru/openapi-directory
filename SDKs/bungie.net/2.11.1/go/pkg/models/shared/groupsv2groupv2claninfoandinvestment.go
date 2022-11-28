package shared

// GroupsV2GroupV2ClanInfoAndInvestment
// The same as GroupV2ClanInfo, but includes any investment data.
type GroupsV2GroupV2ClanInfoAndInvestment struct {
	ClanBannerData     *GroupsV2ClanBanner
	ClanCallsign       *string
	D2ClanProgressions map[string]DestinyDestinyProgression
}
