package shared

// VersionDifferences
// The differences between the base and latest versions of the lens.
type VersionDifferences struct {
	PillarDifferences []PillarDifference `json:"PillarDifferences,omitempty"`
}
