package shared

type IngredientObjectItemsCalorieConversionFactor struct {
	CarbohydrateValue *float64 `json:"carbohydrate_value,omitempty"`
	FatValue          *float64 `json:"fat_value,omitempty"`
	ProteinValue      *float64 `json:"protein_value,omitempty"`
}

type IngredientObjectItemsComponents struct {
	DataPoints *int64   `json:"data_points,omitempty"`
	GramWeight *float64 `json:"gram_weight,omitempty"`
	IsRefuse   *bool    `json:"is_refuse,omitempty"`
	Name       *string  `json:"name,omitempty"`
	PctWeight  *float64 `json:"pct_weight,omitempty"`
}

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

type IngredientObjectItemsPortions struct {
	DataPoints      *int64   `json:"data_points,omitempty"`
	Description     *string  `json:"description,omitempty"`
	Footnote        *string  `json:"footnote,omitempty"`
	GramWeight      *float64 `json:"gram_weight,omitempty"`
	MeasurementUnit *string  `json:"measurement_unit,omitempty"`
	Modifier        *string  `json:"modifier,omitempty"`
}

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

type IngredientObject struct {
	Items []IngredientObjectItems `json:"items,omitempty"`
}
