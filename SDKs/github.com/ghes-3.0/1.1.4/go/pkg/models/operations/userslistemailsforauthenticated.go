package operations

import (
	"openapi/pkg/models/shared"
)

type UsersListEmailsForAuthenticatedQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type UsersListEmailsForAuthenticatedRequest struct {
	QueryParams UsersListEmailsForAuthenticatedQueryParams
}

type UsersListEmailsForAuthenticatedResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	BasicError  *shared.BasicError
	Emails      []shared.Email
}
