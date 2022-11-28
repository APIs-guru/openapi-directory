package shared

// DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact
// Data related to your progress on the current season's artifact that can vary per character.
type DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact struct {
	ArtifactHash *int64
	PointsUsed   *int32
	ResetCount   *int32
	Tiers        []DestinyArtifactsDestinyArtifactTier
}

// DestinyEntitiesCharactersDestinyCharacterProgressionComponent
// This component returns anything that could be considered "Progression" on a user: data where the user is gaining levels, reputation, completions, rewards, etc...
type DestinyEntitiesCharactersDestinyCharacterProgressionComponent struct {
	Checklists                map[string]map[string]bool
	Factions                  map[string]DestinyProgressionDestinyFactionProgression
	Milestones                map[string]DestinyMilestonesDestinyMilestone
	Progressions              map[string]DestinyDestinyProgression
	Quests                    []DestinyQuestsDestinyQuestStatus
	SeasonalArtifact          *DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact
	UninstancedItemObjectives map[string][]DestinyQuestsDestinyObjectiveProgress
}
