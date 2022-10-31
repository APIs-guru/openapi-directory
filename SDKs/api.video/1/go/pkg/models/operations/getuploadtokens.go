package operations

import (
	"openapi/pkg/models/shared"
)

type GetUploadTokensSortByEnum string

const (
	GetUploadTokensSortByEnumCreatedAt GetUploadTokensSortByEnum = "createdAt"
	GetUploadTokensSortByEnumTTL       GetUploadTokensSortByEnum = "ttl"
)

type GetUploadTokensSortOrderEnum string

const (
	GetUploadTokensSortOrderEnumAsc  GetUploadTokensSortOrderEnum = "asc"
	GetUploadTokensSortOrderEnumDesc GetUploadTokensSortOrderEnum = "desc"
)

type GetUploadTokensQueryParams struct {
	CurrentPage *int64                        `queryParam:"style=form,explode=true,name=currentPage"`
	PageSize    *int64                        `queryParam:"style=form,explode=true,name=pageSize"`
	SortBy      *GetUploadTokensSortByEnum    `queryParam:"style=form,explode=true,name=sortBy"`
	SortOrder   *GetUploadTokensSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
}

type GetUploadTokensSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetUploadTokensRequest struct {
	QueryParams GetUploadTokensQueryParams
	Security    GetUploadTokensSecurity
}

type GetUploadTokensResponse struct {
	ContentType       string
	StatusCode        int64
	TokenListResponse *shared.TokenListResponse
}
