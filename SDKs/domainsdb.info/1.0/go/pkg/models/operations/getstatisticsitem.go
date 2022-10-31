package operations

import (
	"openapi/pkg/models/shared"
)

type GetStatisticsItemPathParams struct {
	Zone string `pathParam:"style=simple,explode=false,name=zone"`
}

type GetStatisticsItemQueryParams struct {
	Limit *int64  `queryParam:"style=form,explode=true,name=limit"`
	Page  *string `queryParam:"style=form,explode=true,name=page"`
}

type GetStatisticsItemRequest struct {
	PathParams  GetStatisticsItemPathParams
	QueryParams GetStatisticsItemQueryParams
}

type GetStatisticsItemResponse struct {
	ContentType string
	StatusCode  int64
	ZoneStats   *shared.ZoneStats
}
