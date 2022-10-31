package shared

type BigOvenModelApi2RecipeSearchResult struct {
	ResultCount  *int32                        `json:"ResultCount,omitempty"`
	Results      []BigOvenModelApi2RecipeInfox `json:"Results,omitempty"`
	SpellSuggest *string                       `json:"SpellSuggest,omitempty"`
}
