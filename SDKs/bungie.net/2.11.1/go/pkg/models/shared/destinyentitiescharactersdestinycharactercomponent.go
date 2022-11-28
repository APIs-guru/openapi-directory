package shared

import (
	"time"
)

// DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor
// A shortcut for getting the background color of the user's currently equipped emblem without having to do a DestinyInventoryItemDefinition lookup.
type DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor struct {
	Alpha *string
	Blue  *string
	Green *string
	Red   *string
}

// DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression
// The progression that indicates your character's level. Not their light level, but their character level: you know, the thing you max out a couple hours in and then ignore for the sake of light level.
type DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression struct {
	CurrentProgress     *int32
	CurrentResetCount   *int32
	DailyLimit          *int32
	DailyProgress       *int32
	Level               *int32
	LevelCap            *int32
	NextLevelAt         *int32
	ProgressToNextLevel *int32
	ProgressionHash     *int64
	RewardItemStates    []int32
	SeasonResets        []DestinyDestinyProgressionResetEntry
	StepIndex           *int32
	WeeklyLimit         *int32
	WeeklyProgress      *int32
}

// DestinyEntitiesCharactersDestinyCharacterComponent
// This component contains base properties of the character. You'll probably want to always request this component, but hey you do you.
type DestinyEntitiesCharactersDestinyCharacterComponent struct {
	BaseCharacterLevel       *int32
	CharacterID              *int64
	ClassHash                *int64
	ClassType                *int32
	DateLastPlayed           *time.Time
	EmblemBackgroundPath     *string
	EmblemColor              *DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor
	EmblemHash               *int64
	EmblemPath               *string
	GenderHash               *int64
	GenderType               *int32
	LevelProgression         *DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression
	Light                    *int32
	MembershipID             *int64
	MembershipType           *int32
	MinutesPlayedThisSession *int64
	MinutesPlayedTotal       *int64
	PercentToNextLevel       *float32
	RaceHash                 *int64
	RaceType                 *int32
	Stats                    map[string]int32
	TitleRecordHash          *int64
}
