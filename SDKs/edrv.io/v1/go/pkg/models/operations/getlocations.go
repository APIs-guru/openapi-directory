package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetLocationsQueryParams struct {
	CreatedAtDollarGte  *time.Time             `queryParam:"style=form,explode=true,name=createdAt[$gte]"`
	CreatedAtDollarLte  *time.Time             `queryParam:"style=form,explode=true,name=createdAt[$lte]"`
	IncludeOrganization *bool                  `queryParam:"style=form,explode=true,name=include_organization"`
	PaginateEnabled     *bool                  `queryParam:"style=form,explode=true,name=paginate_enabled"`
	PaginateLimit       *int64                 `queryParam:"style=form,explode=true,name=paginate_limit"`
	PaginatePage        *string                `queryParam:"style=form,explode=true,name=paginate_page"`
	SortBy              *string                `queryParam:"style=form,explode=true,name=sort_by"`
	SortOrder           *shared.SortOrder1Enum `queryParam:"style=form,explode=true,name=sort_order"`
	UpdatedAtDollarGte  *time.Time             `queryParam:"style=form,explode=true,name=updatedAt[$gte]"`
	UpdatedAtDollarLte  *time.Time             `queryParam:"style=form,explode=true,name=updatedAt[$lte]"`
}

type GetLocationsRequest struct {
	QueryParams GetLocationsQueryParams
}

type GetLocationsResponse struct {
	ContentType string
	StatusCode  int64
}
