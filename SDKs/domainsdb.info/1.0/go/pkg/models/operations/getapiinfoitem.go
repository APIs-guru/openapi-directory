package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIInfoItemQueryParams struct {
	APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
}

type GetAPIInfoItemRequest struct {
	QueryParams GetAPIInfoItemQueryParams
}

type GetAPIInfoItemResponse struct {
	APIKeyInfo  *shared.APIKeyInfo
	ContentType string
	StatusCode  int64
}
