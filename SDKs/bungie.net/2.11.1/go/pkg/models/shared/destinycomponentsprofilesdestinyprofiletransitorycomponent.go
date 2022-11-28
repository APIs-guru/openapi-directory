package shared

import (
	"time"
)

// DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity
// If you are in an activity, this is some transitory info about the activity currently being played.
type DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity struct {
	EndTime                     *time.Time
	HighestOpposingFactionScore *float32
	NumberOfOpponents           *int32
	NumberOfPlayers             *int32
	Score                       *float32
	StartTime                   *time.Time
}

// DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability
// Information about whether and what might prevent you from joining this person on a fireteam.
type DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability struct {
	ClosedReasons  *int32
	OpenSlots      *int32
	PrivacySetting *int32
}

// DestinyComponentsProfilesDestinyProfileTransitoryComponent
// This is an experimental set of data that Bungie considers to be "transitory" - information that may be useful for API users, but that is coming from a non-authoritative data source about information that could potentially change at a more frequent pace than Bungie.net will receive updates about it.
// This information is provided exclusively for convenience should any of it be useful to users: we provide no guarantees to the accuracy or timeliness of data that comes from this source. Know that this data can potentially be out-of-date or even wrong entirely if the user disconnected from the game or suddenly changed their status before we can receive refreshed data.
type DestinyComponentsProfilesDestinyProfileTransitoryComponent struct {
	CurrentActivity            *DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity
	Joinability                *DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability
	LastOrbitedDestinationHash *int64
	PartyMembers               []DestinyComponentsProfilesDestinyProfileTransitoryPartyMember
	Tracking                   []DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry
}
