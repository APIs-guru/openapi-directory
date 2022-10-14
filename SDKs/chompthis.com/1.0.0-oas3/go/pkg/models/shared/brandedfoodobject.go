package shared

type BrandedFoodObjectItemsCountryDetails struct {
	EnglishSpeaking    *int64 `json:"english_speaking,omitempty"`
	NonEnglishSpeaking *int64 `json:"non_english_speaking,omitempty"`
}

type BrandedFoodObjectItemsDietFlags struct {
	CompatibilityDescription *string `json:"compatibility_description,omitempty"`
	CompatibilityLevel       *int64  `json:"compatibility_level,omitempty"`
	DietLabel                *string `json:"diet_label,omitempty"`
	Ingredient               *string `json:"ingredient,omitempty"`
	IngredientDescription    *string `json:"ingredient_description,omitempty"`
	IsAllergen               *bool   `json:"is_allergen,omitempty"`
	IsCompatible             *string `json:"is_compatible,omitempty"`
}

type BrandedFoodObjectItemsDietLabelsGlutenFree struct {
	CompatibilityLevel    *int64  `json:"compatibility_level,omitempty"`
	Confidence            *int64  `json:"confidence,omitempty"`
	ConfidenceDescription *string `json:"confidence_description,omitempty"`
	IsCompatible          *bool   `json:"is_compatible,omitempty"`
	Name                  *string `json:"name,omitempty"`
}

type BrandedFoodObjectItemsDietLabelsVegan struct {
	CompatibilityLevel    *int64  `json:"compatibility_level,omitempty"`
	Confidence            *int64  `json:"confidence,omitempty"`
	ConfidenceDescription *string `json:"confidence_description,omitempty"`
	IsCompatible          *bool   `json:"is_compatible,omitempty"`
	Name                  *string `json:"name,omitempty"`
}

type BrandedFoodObjectItemsDietLabelsVegetarian struct {
	CompatibilityLevel    *int64  `json:"compatibility_level,omitempty"`
	Confidence            *int64  `json:"confidence,omitempty"`
	ConfidenceDescription *string `json:"confidence_description,omitempty"`
	IsCompatible          *bool   `json:"is_compatible,omitempty"`
	Name                  *string `json:"name,omitempty"`
}

type BrandedFoodObjectItemsDietLabels struct {
	GlutenFree *BrandedFoodObjectItemsDietLabelsGlutenFree `json:"gluten_free,omitempty"`
	Vegan      *BrandedFoodObjectItemsDietLabelsVegan      `json:"vegan,omitempty"`
	Vegetarian *BrandedFoodObjectItemsDietLabelsVegetarian `json:"vegetarian,omitempty"`
}

type BrandedFoodObjectItemsNutrients struct {
	DataPoints      *int64   `json:"data_points,omitempty"`
	Description     *string  `json:"description,omitempty"`
	MeasurementUnit *string  `json:"measurement_unit,omitempty"`
	Name            *string  `json:"name,omitempty"`
	Per100g         *float64 `json:"per_100g,omitempty"`
	Rank            *int64   `json:"rank,omitempty"`
}

type BrandedFoodObjectItemsPackage struct {
	Quantity *int64  `json:"quantity,omitempty"`
	Size     *string `json:"size,omitempty"`
}

type BrandedFoodObjectItemsPackagingPhotosFront struct {
	Display *string `json:"display,omitempty"`
	Small   *string `json:"small,omitempty"`
	Thumb   *string `json:"thumb,omitempty"`
}

type BrandedFoodObjectItemsPackagingPhotosIngredients struct {
	Display *string `json:"display,omitempty"`
	Small   *string `json:"small,omitempty"`
	Thumb   *string `json:"thumb,omitempty"`
}

type BrandedFoodObjectItemsPackagingPhotosNutrition struct {
	Display *string `json:"display,omitempty"`
	Small   *string `json:"small,omitempty"`
	Thumb   *string `json:"thumb,omitempty"`
}

type BrandedFoodObjectItemsPackagingPhotos struct {
	Front       *BrandedFoodObjectItemsPackagingPhotosFront       `json:"front,omitempty"`
	Ingredients *BrandedFoodObjectItemsPackagingPhotosIngredients `json:"ingredients,omitempty"`
	Nutrition   *BrandedFoodObjectItemsPackagingPhotosNutrition   `json:"nutrition,omitempty"`
}

type BrandedFoodObjectItemsServing struct {
	MeasurementUnit *string `json:"measurement_unit,omitempty"`
	Size            *string `json:"size,omitempty"`
	SizeFulltext    *string `json:"size_fulltext,omitempty"`
}

type BrandedFoodObjectItems struct {
	Allergens             []string                               `json:"allergens,omitempty"`
	Barcode               *string                                `json:"barcode,omitempty"`
	Brand                 *string                                `json:"brand,omitempty"`
	BrandList             []string                               `json:"brand_list,omitempty"`
	Categories            []string                               `json:"categories,omitempty"`
	Countries             []string                               `json:"countries,omitempty"`
	CountryDetails        *BrandedFoodObjectItemsCountryDetails  `json:"country_details,omitempty"`
	Description           *string                                `json:"description,omitempty"`
	DietFlags             []BrandedFoodObjectItemsDietFlags      `json:"diet_flags,omitempty"`
	DietLabels            *BrandedFoodObjectItemsDietLabels      `json:"diet_labels,omitempty"`
	HasEnglishIngredients *bool                                  `json:"has_english_ingredients,omitempty"`
	IngredientList        []string                               `json:"ingredient_list,omitempty"`
	Ingredients           *string                                `json:"ingredients,omitempty"`
	Keywords              []string                               `json:"keywords,omitempty"`
	Minerals              []string                               `json:"minerals,omitempty"`
	Name                  *string                                `json:"name,omitempty"`
	Nutrients             []BrandedFoodObjectItemsNutrients      `json:"nutrients,omitempty"`
	Package               *BrandedFoodObjectItemsPackage         `json:"package,omitempty"`
	PackagingPhotos       *BrandedFoodObjectItemsPackagingPhotos `json:"packaging_photos,omitempty"`
	PalmOilIngredients    []string                               `json:"palm_oil_ingredients,omitempty"`
	Serving               *BrandedFoodObjectItemsServing         `json:"serving,omitempty"`
	Traces                []string                               `json:"traces,omitempty"`
	Vitamins              []string                               `json:"vitamins,omitempty"`
}

type BrandedFoodObject struct {
	Items []BrandedFoodObjectItems `json:"items,omitempty"`
}
