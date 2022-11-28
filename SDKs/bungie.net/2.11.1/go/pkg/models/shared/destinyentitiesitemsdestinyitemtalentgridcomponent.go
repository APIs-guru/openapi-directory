package shared

// DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression
// If the item has a progression, it will be detailed here. A progression means that the item can gain experience. Thresholds of experience are what determines whether and when a talent node can be activated.
type DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression struct {
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

// DestinyEntitiesItemsDestinyItemTalentGridComponent
// Well, we're here in Destiny 2, and Talent Grids are unfortunately still around.
// The good news is that they're pretty much only being used for certain base information on items and for Builds/Subclasses. The bad news is that they still suck. If you really want this information, grab this component.
// An important note is that talent grids are defined as such:
// A Grid has 1:M Nodes, which has 1:M Steps.
// Any given node can only have a single step active at one time, which represents the actual visual contents and effects of the Node (for instance, if you see a "Super Cool Bonus" node, the actual icon and text for the node is coming from the current Step of that node).
// Nodes can be grouped into exclusivity sets *and* as of D2, exclusivity groups (which are collections of exclusivity sets that affect each other).
// See DestinyTalentGridDefinition for more information. Brace yourself, the water's cold out there in the deep end.
type DestinyEntitiesItemsDestinyItemTalentGridComponent struct {
	GridProgression *DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression
	IsGridComplete  *bool
	Nodes           []DestinyDestinyTalentNode
	TalentGridHash  *int64
}
