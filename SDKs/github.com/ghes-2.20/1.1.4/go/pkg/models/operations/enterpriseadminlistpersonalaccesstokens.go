package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminListPersonalAccessTokensQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type EnterpriseAdminListPersonalAccessTokensRequest struct {
	QueryParams EnterpriseAdminListPersonalAccessTokensQueryParams
}

type EnterpriseAdminListPersonalAccessTokensResponse struct {
	ContentType    string
	Headers        map[string][]string
	StatusCode     int64
	Authorizations []shared.Authorization
}
