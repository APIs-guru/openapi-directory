package shared

import (
	"time"
)

// DestinyEntitiesCharactersDestinyCharacterActivitiesComponent
// This component holds activity data for a character. It will tell you about the character's current activity status, as well as activities that are available to the user.
type DestinyEntitiesCharactersDestinyCharacterActivitiesComponent struct {
	AvailableActivities         []DestinyDestinyActivity
	CurrentActivityHash         *int64
	CurrentActivityModeHash     *int64
	CurrentActivityModeHashes   []int64
	CurrentActivityModeType     *int32
	CurrentActivityModeTypes    []int32
	CurrentPlaylistActivityHash *int64
	DateActivityStarted         *time.Time
	LastCompletedStoryHash      *int64
}
