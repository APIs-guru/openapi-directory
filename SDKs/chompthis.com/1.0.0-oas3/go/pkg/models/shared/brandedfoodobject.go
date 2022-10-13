package shared

type BrandedFoodObjectItemsCountryDetails struct {
	EnglishSpeaking    *int64 `json:"english_speaking"`
	NonEnglishSpeaking *int64 `json:"non_english_speaking"`
}

type BrandedFoodObjectItemsDietFlags struct {
	CompatibilityDescription *string `json:"compatibility_description"`
	CompatibilityLevel       *int64  `json:"compatibility_level"`
	DietLabel                *string `json:"diet_label"`
	Ingredient               *string `json:"ingredient"`
	IngredientDescription    *string `json:"ingredient_description"`
	IsAllergen               *bool   `json:"is_allergen"`
	IsCompatible             *string `json:"is_compatible"`
}

type BrandedFoodObjectItemsDietLabelsGlutenFree struct {
	CompatibilityLevel    *int64  `json:"compatibility_level"`
	Confidence            *int64  `json:"confidence"`
	ConfidenceDescription *string `json:"confidence_description"`
	IsCompatible          *bool   `json:"is_compatible"`
	Name                  *string `json:"name"`
}

type BrandedFoodObjectItemsDietLabelsVegan struct {
	CompatibilityLevel    *int64  `json:"compatibility_level"`
	Confidence            *int64  `json:"confidence"`
	ConfidenceDescription *string `json:"confidence_description"`
	IsCompatible          *bool   `json:"is_compatible"`
	Name                  *string `json:"name"`
}

type BrandedFoodObjectItemsDietLabelsVegetarian struct {
	CompatibilityLevel    *int64  `json:"compatibility_level"`
	Confidence            *int64  `json:"confidence"`
	ConfidenceDescription *string `json:"confidence_description"`
	IsCompatible          *bool   `json:"is_compatible"`
	Name                  *string `json:"name"`
}

type BrandedFoodObjectItemsDietLabels struct {
	GlutenFree *BrandedFoodObjectItemsDietLabelsGlutenFree `json:"gluten_free"`
	Vegan      *BrandedFoodObjectItemsDietLabelsVegan      `json:"vegan"`
	Vegetarian *BrandedFoodObjectItemsDietLabelsVegetarian `json:"vegetarian"`
}

type BrandedFoodObjectItemsNutrients struct {
	DataPoints      *int64   `json:"data_points"`
	Description     *string  `json:"description"`
	MeasurementUnit *string  `json:"measurement_unit"`
	Name            *string  `json:"name"`
	Per100g         *float64 `json:"per_100g"`
	Rank            *int64   `json:"rank"`
}

type BrandedFoodObjectItemsPackage struct {
	Quantity *int64  `json:"quantity"`
	Size     *string `json:"size"`
}

type BrandedFoodObjectItemsPackagingPhotosFront struct {
	Display *string `json:"display"`
	Small   *string `json:"small"`
	Thumb   *string `json:"thumb"`
}

type BrandedFoodObjectItemsPackagingPhotosIngredients struct {
	Display *string `json:"display"`
	Small   *string `json:"small"`
	Thumb   *string `json:"thumb"`
}

type BrandedFoodObjectItemsPackagingPhotosNutrition struct {
	Display *string `json:"display"`
	Small   *string `json:"small"`
	Thumb   *string `json:"thumb"`
}

type BrandedFoodObjectItemsPackagingPhotos struct {
	Front       *BrandedFoodObjectItemsPackagingPhotosFront       `json:"front"`
	Ingredients *BrandedFoodObjectItemsPackagingPhotosIngredients `json:"ingredients"`
	Nutrition   *BrandedFoodObjectItemsPackagingPhotosNutrition   `json:"nutrition"`
}

type BrandedFoodObjectItemsServing struct {
	MeasurementUnit *string `json:"measurement_unit"`
	Size            *string `json:"size"`
	SizeFulltext    *string `json:"size_fulltext"`
}

type BrandedFoodObjectItems struct {
	Allergens             []string                               `json:"allergens"`
	Barcode               *string                                `json:"barcode"`
	Brand                 *string                                `json:"brand"`
	BrandList             []string                               `json:"brand_list"`
	Categories            []string                               `json:"categories"`
	Countries             []string                               `json:"countries"`
	CountryDetails        *BrandedFoodObjectItemsCountryDetails  `json:"country_details"`
	Description           *string                                `json:"description"`
	DietFlags             []BrandedFoodObjectItemsDietFlags      `json:"diet_flags"`
	DietLabels            *BrandedFoodObjectItemsDietLabels      `json:"diet_labels"`
	HasEnglishIngredients *bool                                  `json:"has_english_ingredients"`
	IngredientList        []string                               `json:"ingredient_list"`
	Ingredients           *string                                `json:"ingredients"`
	Keywords              []string                               `json:"keywords"`
	Minerals              []string                               `json:"minerals"`
	Name                  *string                                `json:"name"`
	Nutrients             []BrandedFoodObjectItemsNutrients      `json:"nutrients"`
	Package               *BrandedFoodObjectItemsPackage         `json:"package"`
	PackagingPhotos       *BrandedFoodObjectItemsPackagingPhotos `json:"packaging_photos"`
	PalmOilIngredients    []string                               `json:"palm_oil_ingredients"`
	Serving               *BrandedFoodObjectItemsServing         `json:"serving"`
	Traces                []string                               `json:"traces"`
	Vitamins              []string                               `json:"vitamins"`
}

type BrandedFoodObject struct {
	Items []BrandedFoodObjectItems `json:"items"`
}
