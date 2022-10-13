package shared

type BigOvenModelRecipeInfoTiny struct {
	ImageURL     *string  `json:"ImageURL"`
	QualityScore *int32   `json:"QualityScore"`
	RecipeID     *int32   `json:"RecipeID"`
	Servings     *float64 `json:"Servings"`
	Title        *string  `json:"Title"`
}
