package shared

type DestinyArtifactsDestinyArtifactTier struct {
	IsUnlocked     *bool
	Items          []DestinyArtifactsDestinyArtifactTierItem
	PointsToUnlock *int32
	TierHash       *int64
}
