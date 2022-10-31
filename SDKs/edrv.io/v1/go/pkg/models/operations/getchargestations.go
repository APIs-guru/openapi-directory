package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetChargeStationsQueryParams struct {
	Active              *bool                  `queryParam:"style=form,explode=true,name=active"`
	CreatedAtDollarGte  *time.Time             `queryParam:"style=form,explode=true,name=createdAt[$gte]"`
	CreatedAtDollarLte  *time.Time             `queryParam:"style=form,explode=true,name=createdAt[$lte]"`
	IncludeEvses        *bool                  `queryParam:"style=form,explode=true,name=include_evses"`
	IncludeLocation     *bool                  `queryParam:"style=form,explode=true,name=include_location"`
	IncludeOrganization *bool                  `queryParam:"style=form,explode=true,name=include_organization"`
	Location            *string                `queryParam:"style=form,explode=true,name=location"`
	Online              *bool                  `queryParam:"style=form,explode=true,name=online"`
	Organization        *string                `queryParam:"style=form,explode=true,name=organization"`
	PaginateEnabled     *bool                  `queryParam:"style=form,explode=true,name=paginate_enabled"`
	PaginateLimit       *int64                 `queryParam:"style=form,explode=true,name=paginate_limit"`
	PaginatePage        *string                `queryParam:"style=form,explode=true,name=paginate_page"`
	Public              *bool                  `queryParam:"style=form,explode=true,name=public"`
	SortBy              *string                `queryParam:"style=form,explode=true,name=sort_by"`
	SortOrder           *shared.SortOrder1Enum `queryParam:"style=form,explode=true,name=sort_order"`
	UpdatedAtDollarGte  *time.Time             `queryParam:"style=form,explode=true,name=updatedAt[$gte]"`
	UpdatedAtDollarLte  *time.Time             `queryParam:"style=form,explode=true,name=updatedAt[$lte]"`
}

type GetChargeStationsRequest struct {
	QueryParams GetChargeStationsQueryParams
}

type GetChargeStationsResponse struct {
	ContentType string
	StatusCode  int64
}
