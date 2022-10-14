package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetDriversQueryParams struct {
	Active              *bool                  `queryParam:"style=form,explode=true,name=active"`
	CreatedAtDollarGte  *time.Time             `queryParam:"style=form,explode=true,name=createdAt[$gte]"`
	CreatedAtDollarLte  *time.Time             `queryParam:"style=form,explode=true,name=createdAt[$lte]"`
	IncludeGroup        *bool                  `queryParam:"style=form,explode=true,name=include_group"`
	IncludeOrganization *bool                  `queryParam:"style=form,explode=true,name=include_organization"`
	IncludeTokens       *bool                  `queryParam:"style=form,explode=true,name=include_tokens"`
	PaginateEnabled     *bool                  `queryParam:"style=form,explode=true,name=paginate_enabled"`
	PaginateLimit       *int64                 `queryParam:"style=form,explode=true,name=paginate_limit"`
	PaginatePage        *string                `queryParam:"style=form,explode=true,name=paginate_page"`
	SortBy              *string                `queryParam:"style=form,explode=true,name=sort_by"`
	SortOrder           *shared.SortOrder1Enum `queryParam:"style=form,explode=true,name=sort_order"`
	UpdatedAtDollarGte  *time.Time             `queryParam:"style=form,explode=true,name=updatedAt[$gte]"`
	UpdatedAtDollarLte  *time.Time             `queryParam:"style=form,explode=true,name=updatedAt[$lte]"`
}

type GetDriversRequest struct {
	QueryParams GetDriversQueryParams
}

type GetDrivers200ApplicationJSON struct {
	Message *string       `json:"message,omitempty"`
	Ok      *bool         `json:"ok,omitempty"`
	Result  []interface{} `json:"result,omitempty"`
}

type GetDriversResponse struct {
	ContentType                        string
	StatusCode                         int64
	GetDrivers200ApplicationJSONObject *GetDrivers200ApplicationJSON
}
