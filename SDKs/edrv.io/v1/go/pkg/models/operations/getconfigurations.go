package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetConfigurationsQueryParams struct {
	CreatedAtDollarGte *time.Time             `queryParam:"style=form,explode=true,name=createdAt[$gte]"`
	CreatedAtDollarLte *time.Time             `queryParam:"style=form,explode=true,name=createdAt[$lte]"`
	PaginateEnabled    *bool                  `queryParam:"style=form,explode=true,name=paginate_enabled"`
	PaginateLimit      *int64                 `queryParam:"style=form,explode=true,name=paginate_limit"`
	PaginatePage       *string                `queryParam:"style=form,explode=true,name=paginate_page"`
	SortBy             *string                `queryParam:"style=form,explode=true,name=sort_by"`
	SortOrder          *shared.SortOrder1Enum `queryParam:"style=form,explode=true,name=sort_order"`
	UpdatedAtDollarGte *time.Time             `queryParam:"style=form,explode=true,name=updatedAt[$gte]"`
	UpdatedAtDollarLte *time.Time             `queryParam:"style=form,explode=true,name=updatedAt[$lte]"`
}

type GetConfigurationsRequest struct {
	QueryParams GetConfigurationsQueryParams
}

type GetConfigurationsResponse struct {
	ContentType string
	StatusCode  int64
}
