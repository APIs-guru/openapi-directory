package operations

import (
	"openapi/pkg/models/shared"
)

type GetFoodBrandedNamePhpQueryParams struct {
	Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
	Name  string `queryParam:"style=form,explode=true,name=name"`
	Page  *int64 `queryParam:"style=form,explode=true,name=page"`
}

type GetFoodBrandedNamePhpSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=query"`
}

type GetFoodBrandedNamePhpRequest struct {
	QueryParams GetFoodBrandedNamePhpQueryParams
	Security    GetFoodBrandedNamePhpSecurity
}

type GetFoodBrandedNamePhpResponse struct {
	BrandedFoodObject *shared.BrandedFoodObject
	ContentType       string
	StatusCode        int64
}
