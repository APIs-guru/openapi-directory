package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTokensQueryParams struct {
	CreatedAtDollarGte  *time.Time             `queryParam:"style=form,explode=true,name=createdAt[$gte]"`
	CreatedAtDollarLte  *time.Time             `queryParam:"style=form,explode=true,name=createdAt[$lte]"`
	IncludeDriver       *bool                  `queryParam:"style=form,explode=true,name=include_driver"`
	IncludeOrganization *bool                  `queryParam:"style=form,explode=true,name=include_organization"`
	PaginateEnabled     *bool                  `queryParam:"style=form,explode=true,name=paginate_enabled"`
	PaginateLimit       *int64                 `queryParam:"style=form,explode=true,name=paginate_limit"`
	PaginatePage        *string                `queryParam:"style=form,explode=true,name=paginate_page"`
	SortBy              *string                `queryParam:"style=form,explode=true,name=sort_by"`
	SortOrder           *shared.SortOrder1Enum `queryParam:"style=form,explode=true,name=sort_order"`
	UpdatedAtDollarGte  *time.Time             `queryParam:"style=form,explode=true,name=updatedAt[$gte]"`
	UpdatedAtDollarLte  *time.Time             `queryParam:"style=form,explode=true,name=updatedAt[$lte]"`
}

type GetTokens200ApplicationJSON struct {
	Message *string       `json:"message,omitempty"`
	Ok      *bool         `json:"ok,omitempty"`
	Result  []interface{} `json:"result,omitempty"`
}

type GetTokensRequest struct {
	QueryParams GetTokensQueryParams
}

type GetTokensResponse struct {
	ContentType                       string
	StatusCode                        int64
	GetTokens200ApplicationJSONObject *GetTokens200ApplicationJSON
}
