package shared

type BigOvenModelRecipeInfoTiny struct {
	ImageURL     *string  `json:"ImageURL,omitempty"`
	QualityScore *int32   `json:"QualityScore,omitempty"`
	RecipeID     *int32   `json:"RecipeID,omitempty"`
	Servings     *float64 `json:"Servings,omitempty"`
	Title        *string  `json:"Title,omitempty"`
}
