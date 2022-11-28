package shared

import (
	"time"
)

// DestinyResponsesDestinyProfileUserInfoCardPlatformSilver
// This is the silver available on this Profile across any platforms on which they have purchased silver.
//
//	This is only available if you are requesting yourself.
type DestinyResponsesDestinyProfileUserInfoCardPlatformSilver struct {
	PlatformSilver map[string]DestinyEntitiesItemsDestinyItemComponent
}

type DestinyResponsesDestinyProfileUserInfoCard struct {
	ApplicableMembershipTypes []int32
	CrossSaveOverride         *int32
	DateLastPlayed            *time.Time
	DisplayName               *string
	IconPath                  *string
	IsCrossSavePrimary        *bool
	IsOverridden              *bool
	IsPublic                  *bool
	MembershipID              *int64
	MembershipType            *int32
	PlatformSilver            *DestinyResponsesDestinyProfileUserInfoCardPlatformSilver
	SupplementalDisplayName   *string
	UnpairedGameVersions      *int32
}
