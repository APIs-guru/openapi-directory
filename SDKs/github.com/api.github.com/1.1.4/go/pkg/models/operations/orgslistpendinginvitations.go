package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsListPendingInvitationsPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type OrgsListPendingInvitationsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type OrgsListPendingInvitationsRequest struct {
	PathParams  OrgsListPendingInvitationsPathParams
	QueryParams OrgsListPendingInvitationsQueryParams
}

type OrgsListPendingInvitationsResponse struct {
	ContentType             string
	Headers                 map[string][]string
	StatusCode              int64
	BasicError              *shared.BasicError
	OrganizationInvitations []shared.OrganizationInvitation
}
