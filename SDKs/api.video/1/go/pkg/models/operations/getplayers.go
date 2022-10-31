package operations

import (
	"openapi/pkg/models/shared"
)

type GetPlayersSortByEnum string

const (
	GetPlayersSortByEnumCreatedAt GetPlayersSortByEnum = "createdAt"
	GetPlayersSortByEnumUpdatedAt GetPlayersSortByEnum = "updatedAt"
)

type GetPlayersSortOrderEnum string

const (
	GetPlayersSortOrderEnumAsc  GetPlayersSortOrderEnum = "asc"
	GetPlayersSortOrderEnumDesc GetPlayersSortOrderEnum = "desc"
)

type GetPlayersQueryParams struct {
	CurrentPage *int64                   `queryParam:"style=form,explode=true,name=currentPage"`
	PageSize    *int64                   `queryParam:"style=form,explode=true,name=pageSize"`
	SortBy      *GetPlayersSortByEnum    `queryParam:"style=form,explode=true,name=sortBy"`
	SortOrder   *GetPlayersSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
}

type GetPlayersSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetPlayersRequest struct {
	QueryParams GetPlayersQueryParams
	Security    GetPlayersSecurity
}

type GetPlayersResponse struct {
	ContentType         string
	StatusCode          int64
	BadRequest          *shared.BadRequest
	PlayersListResponse *shared.PlayersListResponse
}
