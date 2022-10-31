package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsListPublicMembersPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type OrgsListPublicMembersQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type OrgsListPublicMembersRequest struct {
	PathParams  OrgsListPublicMembersPathParams
	QueryParams OrgsListPublicMembersQueryParams
}

type OrgsListPublicMembersResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	SimpleUsers []shared.SimpleUser
}
