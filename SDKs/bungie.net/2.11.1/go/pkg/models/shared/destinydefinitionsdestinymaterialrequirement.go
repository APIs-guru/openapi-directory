package shared

// DestinyDefinitionsDestinyMaterialRequirement
// Many actions relating to items require you to expend materials: - Activating a talent node - Inserting a plug into a socket The items will refer to material requirements by a materialRequirementsHash in these cases, and this is the definition for those requirements in terms of the item required, how much of it is required and other interesting info. This is one of the rare/strange times where a single contract class is used both in definitions *and* in live data response contracts. I'm not sure yet whether I regret that.
type DestinyDefinitionsDestinyMaterialRequirement struct {
	Count                *int32
	DeleteOnAction       *bool
	ItemHash             *int64
	OmitFromRequirements *bool
}
