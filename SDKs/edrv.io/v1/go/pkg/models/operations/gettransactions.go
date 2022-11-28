package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTransactionsStatusEnum string

const (
	GetTransactionsStatusEnumStarted GetTransactionsStatusEnum = "Started"
	GetTransactionsStatusEnumEnded   GetTransactionsStatusEnum = "Ended"
)

type GetTransactionsQueryParams struct {
	CreatedAtDollarGte   *time.Time                 `queryParam:"style=form,explode=true,name=createdAt[$gte]"`
	CreatedAtDollarLte   *time.Time                 `queryParam:"style=form,explode=true,name=createdAt[$lte]"`
	IncludeChargestation *bool                      `queryParam:"style=form,explode=true,name=include_chargestation"`
	IncludeConnector     *bool                      `queryParam:"style=form,explode=true,name=include_connector"`
	IncludeDriver        *bool                      `queryParam:"style=form,explode=true,name=include_driver"`
	IncludeEvse          *bool                      `queryParam:"style=form,explode=true,name=include_evse"`
	IncludeOrganization  *bool                      `queryParam:"style=form,explode=true,name=include_organization"`
	IncludeRate          *bool                      `queryParam:"style=form,explode=true,name=include_rate"`
	IncludeReservation   *bool                      `queryParam:"style=form,explode=true,name=include_reservation"`
	IncludeToken         *bool                      `queryParam:"style=form,explode=true,name=include_token"`
	PaginateEnabled      *bool                      `queryParam:"style=form,explode=true,name=paginate_enabled"`
	PaginateLimit        *int64                     `queryParam:"style=form,explode=true,name=paginate_limit"`
	PaginatePage         *string                    `queryParam:"style=form,explode=true,name=paginate_page"`
	SortBy               *string                    `queryParam:"style=form,explode=true,name=sort_by"`
	SortOrder            *shared.SortOrder1Enum     `queryParam:"style=form,explode=true,name=sort_order"`
	Status               *GetTransactionsStatusEnum `queryParam:"style=form,explode=true,name=status"`
	UpdatedAtDollarGte   *time.Time                 `queryParam:"style=form,explode=true,name=updatedAt[$gte]"`
	UpdatedAtDollarLte   *time.Time                 `queryParam:"style=form,explode=true,name=updatedAt[$lte]"`
}

type GetTransactions200ApplicationJSON struct {
	HasNext     *bool         `json:"hasNext,omitempty"`
	HasPrevious *bool         `json:"hasPrevious,omitempty"`
	Message     *string       `json:"message,omitempty"`
	Ok          *bool         `json:"ok,omitempty"`
	Result      []interface{} `json:"result,omitempty"`
}

type GetTransactionsRequest struct {
	QueryParams GetTransactionsQueryParams
}

type GetTransactionsResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetTransactions200ApplicationJSONObject *GetTransactions200ApplicationJSON
}
