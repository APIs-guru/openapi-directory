package shared

import (
	"time"
)

// DestinyEntitiesProfilesDestinyProfileComponentUserInfo
// If you need to render the Profile (their platform name, icon, etc...) somewhere, this property contains that information.
type DestinyEntitiesProfilesDestinyProfileComponentUserInfo struct {
	ApplicableMembershipTypes []int32
	CrossSaveOverride         *int32
	DisplayName               *string
	IconPath                  *string
	IsPublic                  *bool
	MembershipID              *int64
	MembershipType            *int32
	SupplementalDisplayName   *string
}

// DestinyEntitiesProfilesDestinyProfileComponent
// The most essential summary information about a Profile (in Destiny 1, we called these "Accounts").
type DestinyEntitiesProfilesDestinyProfileComponent struct {
	CharacterIds                []int64
	CurrentSeasonHash           *int64
	CurrentSeasonRewardPowerCap *int32
	DateLastPlayed              *time.Time
	SeasonHashes                []int64
	UserInfo                    *DestinyEntitiesProfilesDestinyProfileComponentUserInfo
	VersionsOwned               *int32
}
