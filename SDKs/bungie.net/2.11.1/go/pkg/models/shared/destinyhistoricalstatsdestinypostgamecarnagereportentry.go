package shared

// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended
// Extended data extracted from the activity blob.
type DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended struct {
	Values  map[string]DestinyHistoricalStatsDestinyHistoricalStatsValue
	Weapons []DestinyHistoricalStatsDestinyHistoricalWeaponStats
}

// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo
// Details about the player as they are known on BungieNet. This will be undefined if the player has marked their credential private, or does not have a BungieNet account.
type DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo struct {
	ApplicableMembershipTypes []int32
	CrossSaveOverride         *int32
	DisplayName               *string
	IconPath                  *string
	IsPublic                  *bool
	MembershipID              *int64
	MembershipType            *int32
	SupplementalDisplayName   *string
}

// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo
// Details about the player as they are known in game (platform display name, Destiny emblem)
type DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo struct {
	ApplicableMembershipTypes []int32
	CrossSaveOverride         *int32
	DisplayName               *string
	IconPath                  *string
	IsPublic                  *bool
	MembershipID              *int64
	MembershipType            *int32
	SupplementalDisplayName   *string
}

// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer
// Identity details of the player
type DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer struct {
	BungieNetUserInfo *DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo
	CharacterClass    *string
	CharacterLevel    *int32
	ClanName          *string
	ClanTag           *string
	ClassHash         *int64
	DestinyUserInfo   *DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo
	EmblemHash        *int64
	GenderHash        *int64
	LightLevel        *int32
	RaceHash          *int64
}

// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic
// Basic stat value.
type DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic struct {
	DisplayValue *string
	Value        *float64
}

// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga
// Per game average for the statistic, if applicable
type DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga struct {
	DisplayValue *string
	Value        *float64
}

// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted
// Weighted value of the stat if a weight greater than 1 has been assigned.
type DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted struct {
	DisplayValue *string
	Value        *float64
}

// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore
// Score of the player if available
type DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore struct {
	ActivityID *int64
	Basic      *DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic
	Pga        *DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga
	StatID     *string
	Weighted   *DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted
}

type DestinyHistoricalStatsDestinyPostGameCarnageReportEntry struct {
	CharacterID *int64
	Extended    *DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended
	Player      *DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer
	Score       *DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore
	Standing    *int32
	Values      map[string]DestinyHistoricalStatsDestinyHistoricalStatsValue
}
