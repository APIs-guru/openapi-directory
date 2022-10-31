package operations

import (
	"openapi/pkg/models/shared"
)

type CategoriesOnePathParams struct {
	EcosystemID string `pathParam:"style=simple,explode=false,name=ecosystem_id"`
	ID          string `pathParam:"style=simple,explode=false,name=id"`
}

type CategoriesOneRequest struct {
	PathParams CategoriesOnePathParams
}

type CategoriesOneResponse struct {
	ContentType         string
	GetCategoryResponse *shared.GetCategoryResponse
	StatusCode          int64
}
