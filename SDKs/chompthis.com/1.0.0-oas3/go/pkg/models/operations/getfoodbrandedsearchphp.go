package operations

import (
	"openapi/pkg/models/shared"
)

type GetFoodBrandedSearchPhpDietEnum string

const (
	GetFoodBrandedSearchPhpDietEnumVegan      GetFoodBrandedSearchPhpDietEnum = "Vegan"
	GetFoodBrandedSearchPhpDietEnumVegetarian GetFoodBrandedSearchPhpDietEnum = "Vegetarian"
	GetFoodBrandedSearchPhpDietEnumGlutenFree GetFoodBrandedSearchPhpDietEnum = "Gluten Free"
)

type GetFoodBrandedSearchPhpQueryParams struct {
	Allergen   *string                          `queryParam:"style=form,explode=true,name=allergen"`
	Brand      *string                          `queryParam:"style=form,explode=true,name=brand"`
	Category   *string                          `queryParam:"style=form,explode=true,name=category"`
	Country    *string                          `queryParam:"style=form,explode=true,name=country"`
	Diet       *GetFoodBrandedSearchPhpDietEnum `queryParam:"style=form,explode=true,name=diet"`
	Ingredient *string                          `queryParam:"style=form,explode=true,name=ingredient"`
	Keyword    *string                          `queryParam:"style=form,explode=true,name=keyword"`
	Limit      *int64                           `queryParam:"style=form,explode=true,name=limit"`
	Mineral    *string                          `queryParam:"style=form,explode=true,name=mineral"`
	Nutrient   *string                          `queryParam:"style=form,explode=true,name=nutrient"`
	Page       *int64                           `queryParam:"style=form,explode=true,name=page"`
	PalmOil    *string                          `queryParam:"style=form,explode=true,name=palm_oil"`
	Trace      *string                          `queryParam:"style=form,explode=true,name=trace"`
	Vitamin    *string                          `queryParam:"style=form,explode=true,name=vitamin"`
}

type GetFoodBrandedSearchPhpSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=query"`
}

type GetFoodBrandedSearchPhpRequest struct {
	QueryParams GetFoodBrandedSearchPhpQueryParams
	Security    GetFoodBrandedSearchPhpSecurity
}

type GetFoodBrandedSearchPhpResponse struct {
	BrandedFoodObject *shared.BrandedFoodObject
	ContentType       string
	StatusCode        int64
}
