package operations

import (
	"openapi/pkg/models/shared"
)

type GetSsoStrategiesQueryParams struct {
	Cursor  *string `queryParam:"style=form,explode=true,name=cursor"`
	PerPage *int32  `queryParam:"style=form,explode=true,name=per_page"`
}

type GetSsoStrategiesRequest struct {
	QueryParams GetSsoStrategiesQueryParams
}

type GetSsoStrategiesResponse struct {
	ContentType         string
	SsoStrategyEntities []shared.SsoStrategyEntity
	StatusCode          int64
}
