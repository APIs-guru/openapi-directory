package shared

// DestinyDestinyTalentNodeNodeStatsBlock
// This property has some history. A talent grid can provide stats on both the item it's related to and the character equipping the item. This returns data about those stat bonuses.
type DestinyDestinyTalentNodeNodeStatsBlock struct {
	CurrentStepStats []DestinyDestinyStat
	NextStepStats    []DestinyDestinyStat
}

// DestinyDestinyTalentNode
// I see you've come to find out more about Talent Nodes. I'm so sorry. Talent Nodes are the conceptual, visual nodes that appear on Talent Grids. Talent Grids, in Destiny 1, were found on almost every instanced item: they had Nodes that could be activated to change the properties of the item. In Destiny 2, Talent Grids only exist for Builds/Subclasses, and while the basic concept is the same (Nodes can be activated once you've gained sufficient Experience on the Item, and provide effects), there are some new concepts from Destiny 1. Examine DestinyTalentGridDefinition and its subordinates for more information. This is the "Live" information for the current status of a Talent Node on a specific item. Talent Nodes have many Steps, but only one can be active at any one time: and it is the Step that determines both the visual and the game state-changing properties that the Node provides. Examine this and DestinyTalentNodeStepDefinition carefully. *IMPORTANT NOTE* Talent Nodes are, unfortunately, Content Version DEPENDENT. Though they refer to hashes for Nodes and Steps, those hashes are not guaranteed to be immutable across content versions. This is a source of great exasperation for me, but as a result anyone using Talent Grid data must ensure that the content version of their static content matches that of the server responses before showing or making decisions based on talent grid data.
type DestinyDestinyTalentNode struct {
	ActivationGridLevel *int32
	Hidden              *bool
	IsActivated         *bool
	MaterialsToUpgrade  []DestinyDefinitionsDestinyMaterialRequirement
	NodeHash            *int64
	NodeIndex           *int32
	NodeStatsBlock      *DestinyDestinyTalentNodeNodeStatsBlock
	ProgressPercent     *float32
	State               *int32
	StepIndex           *int32
}
