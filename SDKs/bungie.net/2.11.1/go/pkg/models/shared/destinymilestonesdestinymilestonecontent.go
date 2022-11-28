package shared

// DestinyMilestonesDestinyMilestoneContent
// Represents localized, extended content related to Milestones. This is intentionally returned by a separate endpoint and not with Character-level Milestone data because we do not put localized data into standard Destiny responses, both for brevity of response and for caching purposes. If you really need this data, hit the Milestone Content endpoint.
type DestinyMilestonesDestinyMilestoneContent struct {
	About          *string
	ItemCategories []DestinyMilestonesDestinyMilestoneContentItemCategory
	Status         *string
	Tips           []string
}
