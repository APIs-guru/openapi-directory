package shared

type IngredientObjectItemsCalorieConversionFactor struct {
	CarbohydrateValue *float64 `json:"carbohydrate_value"`
	FatValue          *float64 `json:"fat_value"`
	ProteinValue      *float64 `json:"protein_value"`
}

type IngredientObjectItemsComponents struct {
	DataPoints *int64   `json:"data_points"`
	GramWeight *float64 `json:"gram_weight"`
	IsRefuse   *bool    `json:"is_refuse"`
	Name       *string  `json:"name"`
	PctWeight  *float64 `json:"pct_weight"`
}

type IngredientObjectItemsNutrients struct {
	DataPoints      *int64   `json:"data_points"`
	Description     *string  `json:"description"`
	Footnote        *string  `json:"footnote"`
	Max             *float64 `json:"max"`
	MeasurementUnit *string  `json:"measurement_unit"`
	Median          *float64 `json:"median"`
	Min             *float64 `json:"min"`
	Name            *string  `json:"name"`
	Per100g         *float64 `json:"per_100g"`
	Rank            *int64   `json:"rank"`
}

type IngredientObjectItemsPortions struct {
	DataPoints      *int64   `json:"data_points"`
	Description     *string  `json:"description"`
	Footnote        *string  `json:"footnote"`
	GramWeight      *float64 `json:"gram_weight"`
	MeasurementUnit *string  `json:"measurement_unit"`
	Modifier        *string  `json:"modifier"`
}

type IngredientObjectItems struct {
	CalorieConversionFactor *IngredientObjectItemsCalorieConversionFactor `json:"calorie_conversion_factor"`
	Categories              []string                                      `json:"categories"`
	CommonName              *string                                       `json:"common_name"`
	Components              []IngredientObjectItemsComponents             `json:"components"`
	Footnote                *string                                       `json:"footnote"`
	Name                    *string                                       `json:"name"`
	Nutrients               []IngredientObjectItemsNutrients              `json:"nutrients"`
	Portions                []IngredientObjectItemsPortions               `json:"portions"`
	ProteinConversionFactor *float64                                      `json:"protein_conversion_factor"`
	Score                   *string                                       `json:"score"`
	SearchTerm              *string                                       `json:"search_term"`
}

type IngredientObject struct {
	Items []IngredientObjectItems `json:"items"`
}
