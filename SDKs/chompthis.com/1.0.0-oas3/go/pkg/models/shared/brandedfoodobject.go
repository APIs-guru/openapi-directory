package shared

// BrandedFoodObjectItemsCountryDetails
// An object containing additional information on the countries where this item is found
type BrandedFoodObjectItemsCountryDetails struct {
	EnglishSpeaking    *int64 `json:"english_speaking,omitempty"`
	NonEnglishSpeaking *int64 `json:"non_english_speaking,omitempty"`
}

// BrandedFoodObjectItemsDietFlags
// An object containing information on an individual ingredient that was flagged as potentially not being compatible with a certain diet
type BrandedFoodObjectItemsDietFlags struct {
	CompatibilityDescription *string `json:"compatibility_description,omitempty"`
	CompatibilityLevel       *int64  `json:"compatibility_level,omitempty"`
	DietLabel                *string `json:"diet_label,omitempty"`
	Ingredient               *string `json:"ingredient,omitempty"`
	IngredientDescription    *string `json:"ingredient_description,omitempty"`
	IsAllergen               *bool   `json:"is_allergen,omitempty"`
	IsCompatible             *string `json:"is_compatible,omitempty"`
}

// BrandedFoodObjectItemsDietLabelsGlutenFree
// An object containing information on this item's compatibility with Gluten Free diets
type BrandedFoodObjectItemsDietLabelsGlutenFree struct {
	CompatibilityLevel    *int64  `json:"compatibility_level,omitempty"`
	Confidence            *int64  `json:"confidence,omitempty"`
	ConfidenceDescription *string `json:"confidence_description,omitempty"`
	IsCompatible          *bool   `json:"is_compatible,omitempty"`
	Name                  *string `json:"name,omitempty"`
}

// BrandedFoodObjectItemsDietLabelsVegan
// An object containing information on this item's compatibility with the Vegan diets
type BrandedFoodObjectItemsDietLabelsVegan struct {
	CompatibilityLevel    *int64  `json:"compatibility_level,omitempty"`
	Confidence            *int64  `json:"confidence,omitempty"`
	ConfidenceDescription *string `json:"confidence_description,omitempty"`
	IsCompatible          *bool   `json:"is_compatible,omitempty"`
	Name                  *string `json:"name,omitempty"`
}

// BrandedFoodObjectItemsDietLabelsVegetarian
// An object containing information on this item's compatibility with Vegetarian diets
type BrandedFoodObjectItemsDietLabelsVegetarian struct {
	CompatibilityLevel    *int64  `json:"compatibility_level,omitempty"`
	Confidence            *int64  `json:"confidence,omitempty"`
	ConfidenceDescription *string `json:"confidence_description,omitempty"`
	IsCompatible          *bool   `json:"is_compatible,omitempty"`
	Name                  *string `json:"name,omitempty"`
}

// BrandedFoodObjectItemsDietLabels
// An object containing this item's compatibility grades for each supported diet
type BrandedFoodObjectItemsDietLabels struct {
	GlutenFree *BrandedFoodObjectItemsDietLabelsGlutenFree `json:"gluten_free,omitempty"`
	Vegan      *BrandedFoodObjectItemsDietLabelsVegan      `json:"vegan,omitempty"`
	Vegetarian *BrandedFoodObjectItemsDietLabelsVegetarian `json:"vegetarian,omitempty"`
}

// BrandedFoodObjectItemsNutrients
// An object containing information for a specific nutrient found in this food item
type BrandedFoodObjectItemsNutrients struct {
	DataPoints      *int64   `json:"data_points,omitempty"`
	Description     *string  `json:"description,omitempty"`
	MeasurementUnit *string  `json:"measurement_unit,omitempty"`
	Name            *string  `json:"name,omitempty"`
	Per100g         *float64 `json:"per_100g,omitempty"`
	Rank            *int64   `json:"rank,omitempty"`
}

// BrandedFoodObjectItemsPackage
// An object containing basic packaging information about this item
type BrandedFoodObjectItemsPackage struct {
	Quantity *int64  `json:"quantity,omitempty"`
	Size     *string `json:"size,omitempty"`
}

// BrandedFoodObjectItemsPackagingPhotosFront
// An object containing photos of the front of this item's packaging
type BrandedFoodObjectItemsPackagingPhotosFront struct {
	Display *string `json:"display,omitempty"`
	Small   *string `json:"small,omitempty"`
	Thumb   *string `json:"thumb,omitempty"`
}

// BrandedFoodObjectItemsPackagingPhotosIngredients
// An object containing photos of the ingredients on this item's packaging
type BrandedFoodObjectItemsPackagingPhotosIngredients struct {
	Display *string `json:"display,omitempty"`
	Small   *string `json:"small,omitempty"`
	Thumb   *string `json:"thumb,omitempty"`
}

// BrandedFoodObjectItemsPackagingPhotosNutrition
// An object containing photos of this item's nutrition label
type BrandedFoodObjectItemsPackagingPhotosNutrition struct {
	Display *string `json:"display,omitempty"`
	Small   *string `json:"small,omitempty"`
	Thumb   *string `json:"thumb,omitempty"`
}

// BrandedFoodObjectItemsPackagingPhotos
// A object containing a collection of photos of this item's packaging
type BrandedFoodObjectItemsPackagingPhotos struct {
	Front       *BrandedFoodObjectItemsPackagingPhotosFront       `json:"front,omitempty"`
	Ingredients *BrandedFoodObjectItemsPackagingPhotosIngredients `json:"ingredients,omitempty"`
	Nutrition   *BrandedFoodObjectItemsPackagingPhotosNutrition   `json:"nutrition,omitempty"`
}

// BrandedFoodObjectItemsServing
// An object containing serving information for this item
type BrandedFoodObjectItemsServing struct {
	MeasurementUnit *string `json:"measurement_unit,omitempty"`
	Size            *string `json:"size,omitempty"`
	SizeFulltext    *string `json:"size_fulltext,omitempty"`
}

// BrandedFoodObjectItems
// An object containing information for this specific item.
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

// BrandedFoodObject
// Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.
type BrandedFoodObject struct {
	Items []BrandedFoodObjectItems `json:"items,omitempty"`
}
