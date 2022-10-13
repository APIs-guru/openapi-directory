package shared

type BigOvenModelApi2RecipeSearchResult struct {
	ResultCount  *int32                        `json:"ResultCount"`
	Results      []BigOvenModelApi2RecipeInfox `json:"Results"`
	SpellSuggest *string                       `json:"SpellSuggest"`
}
