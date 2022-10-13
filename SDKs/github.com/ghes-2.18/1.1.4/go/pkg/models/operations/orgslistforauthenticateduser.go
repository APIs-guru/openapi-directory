package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsListForAuthenticatedUserQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type OrgsListForAuthenticatedUserRequest struct {
	QueryParams OrgsListForAuthenticatedUserQueryParams
}

type OrgsListForAuthenticatedUserResponse struct {
	ContentType         string
	Headers             map[string][]string
	StatusCode          int64
	BasicError          *shared.BasicError
	OrganizationSimples []shared.OrganizationSimple
}
