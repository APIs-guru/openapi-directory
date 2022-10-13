package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetVehiclesQueryParams struct {
	Active              *bool                  `queryParam:"style=form,explode=true,name=active"`
	CreatedAtDollarGte  *time.Time             `queryParam:"style=form,explode=true,name=createdAt[$gte]"`
	CreatedAtDollarLte  *time.Time             `queryParam:"style=form,explode=true,name=createdAt[$lte]"`
	IncludeDriver       *bool                  `queryParam:"style=form,explode=true,name=include_driver"`
	IncludeOrganization *bool                  `queryParam:"style=form,explode=true,name=include_organization"`
	IncludeToken        *bool                  `queryParam:"style=form,explode=true,name=include_token"`
	PaginateEnabled     *bool                  `queryParam:"style=form,explode=true,name=paginate_enabled"`
	PaginateLimit       *int64                 `queryParam:"style=form,explode=true,name=paginate_limit"`
	PaginatePage        *string                `queryParam:"style=form,explode=true,name=paginate_page"`
	SortBy              *string                `queryParam:"style=form,explode=true,name=sort_by"`
	SortOrder           *shared.SortOrder1Enum `queryParam:"style=form,explode=true,name=sort_order"`
	UpdatedAtDollarGte  *time.Time             `queryParam:"style=form,explode=true,name=updatedAt[$gte]"`
	UpdatedAtDollarLte  *time.Time             `queryParam:"style=form,explode=true,name=updatedAt[$lte]"`
}

type GetVehiclesRequest struct {
	QueryParams GetVehiclesQueryParams
}

type GetVehicles200ApplicationJSON struct {
	Message *string       `json:"message"`
	Ok      *bool         `json:"ok"`
	Result  []interface{} `json:"result"`
}

type GetVehiclesResponse struct {
	ContentType                         string
	StatusCode                          int64
	GetVehicles200ApplicationJSONObject *GetVehicles200ApplicationJSON
}
