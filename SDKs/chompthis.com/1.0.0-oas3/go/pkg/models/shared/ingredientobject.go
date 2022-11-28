package shared

// IngredientObjectItemsCalorieConversionFactor
// An object containing the multiplication factors to be used when calculating energy from macronutrients for a specific food.
type IngredientObjectItemsCalorieConversionFactor struct {
	CarbohydrateValue *float64 `json:"carbohydrate_value,omitempty"`
	FatValue          *float64 `json:"fat_value,omitempty"`
	ProteinValue      *float64 `json:"protein_value,omitempty"`
}

// IngredientObjectItemsComponents
// An object containing information on a specific component of this food item
type IngredientObjectItemsComponents struct {
	DataPoints *int64   `json:"data_points,omitempty"`
	GramWeight *float64 `json:"gram_weight,omitempty"`
	IsRefuse   *bool    `json:"is_refuse,omitempty"`
	Name       *string  `json:"name,omitempty"`
	PctWeight  *float64 `json:"pct_weight,omitempty"`
}

// IngredientObjectItemsNutrients
// An object containing information for a specific nutrient found in this food item
type IngredientObjectItemsNutrients struct {
	DataPoints      *int64   `json:"data_points,omitempty"`
	Description     *string  `json:"description,omitempty"`
	Footnote        *string  `json:"footnote,omitempty"`
	Max             *float64 `json:"max,omitempty"`
	MeasurementUnit *string  `json:"measurement_unit,omitempty"`
	Median          *float64 `json:"median,omitempty"`
	Min             *float64 `json:"min,omitempty"`
	Name            *string  `json:"name,omitempty"`
	Per100g         *float64 `json:"per_100g,omitempty"`
	Rank            *int64   `json:"rank,omitempty"`
}

// IngredientObjectItemsPortions
// An object containing information on a specific food portion found in this item
type IngredientObjectItemsPortions struct {
	DataPoints      *int64   `json:"data_points,omitempty"`
	Description     *string  `json:"description,omitempty"`
	Footnote        *string  `json:"footnote,omitempty"`
	GramWeight      *float64 `json:"gram_weight,omitempty"`
	MeasurementUnit *string  `json:"measurement_unit,omitempty"`
	Modifier        *string  `json:"modifier,omitempty"`
}

// IngredientObjectItems
// An object containing information for this specific item.
type IngredientObjectItems struct {
	CalorieConversionFactor *IngredientObjectItemsCalorieConversionFactor `json:"calorie_conversion_factor,omitempty"`
	Categories              []string                                      `json:"categories,omitempty"`
	CommonName              *string                                       `json:"common_name,omitempty"`
	Components              []IngredientObjectItemsComponents             `json:"components,omitempty"`
	Footnote                *string                                       `json:"footnote,omitempty"`
	Name                    *string                                       `json:"name,omitempty"`
	Nutrients               []IngredientObjectItemsNutrients              `json:"nutrients,omitempty"`
	Portions                []IngredientObjectItemsPortions               `json:"portions,omitempty"`
	ProteinConversionFactor *float64                                      `json:"protein_conversion_factor,omitempty"`
	Score                   *string                                       `json:"score,omitempty"`
	SearchTerm              *string                                       `json:"search_term,omitempty"`
}

// IngredientObject
// Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.
type IngredientObject struct {
	Items []IngredientObjectItems `json:"items,omitempty"`
}
