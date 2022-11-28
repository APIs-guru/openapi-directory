package shared

// DestinyComponentsProfilesDestinyProfileProgressionComponentSeasonalArtifact
// Data related to your progress on the current season's artifact that is the same across characters.
type DestinyComponentsProfilesDestinyProfileProgressionComponentSeasonalArtifact struct {
	ArtifactHash          *int64
	PointProgression      *DestinyDestinyProgression
	PointsAcquired        *int32
	PowerBonus            *int32
	PowerBonusProgression *DestinyDestinyProgression
}

// DestinyComponentsProfilesDestinyProfileProgressionComponent
// The set of progression-related information that applies at a Profile-wide level for your Destiny experience. This differs from the Jimi Hendrix Experience because there's less guitars on fire. Yet. #spoileralert?
// This will include information such as Checklist info.
type DestinyComponentsProfilesDestinyProfileProgressionComponent struct {
	Checklists       map[string]map[string]bool
	SeasonalArtifact *DestinyComponentsProfilesDestinyProfileProgressionComponentSeasonalArtifact
}
