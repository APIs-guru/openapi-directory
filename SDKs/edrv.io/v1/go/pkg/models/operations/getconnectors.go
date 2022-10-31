package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetConnectorsQueryParams struct {
	CreatedAtDollarGte  *time.Time             `queryParam:"style=form,explode=true,name=createdAt[$gte]"`
	CreatedAtDollarLte  *time.Time             `queryParam:"style=form,explode=true,name=createdAt[$lte]"`
	IncludeEvse         *bool                  `queryParam:"style=form,explode=true,name=include_evse"`
	IncludeOrganization *bool                  `queryParam:"style=form,explode=true,name=include_organization"`
	IncludeRate         *bool                  `queryParam:"style=form,explode=true,name=include_rate"`
	PaginateEnabled     *bool                  `queryParam:"style=form,explode=true,name=paginate_enabled"`
	PaginateLimit       *int64                 `queryParam:"style=form,explode=true,name=paginate_limit"`
	PaginatePage        *string                `queryParam:"style=form,explode=true,name=paginate_page"`
	SortBy              *string                `queryParam:"style=form,explode=true,name=sort_by"`
	SortOrder           *shared.SortOrder1Enum `queryParam:"style=form,explode=true,name=sort_order"`
	UpdatedAtDollarGte  *time.Time             `queryParam:"style=form,explode=true,name=updatedAt[$gte]"`
	UpdatedAtDollarLte  *time.Time             `queryParam:"style=form,explode=true,name=updatedAt[$lte]"`
}

type GetConnectorsRequest struct {
	QueryParams GetConnectorsQueryParams
}

type GetConnectorsResponse struct {
	ContentType string
	StatusCode  int64
}
