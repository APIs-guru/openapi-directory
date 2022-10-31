package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsListPendingInvitationsLegacyPathParams struct {
	TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsListPendingInvitationsLegacyQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type TeamsListPendingInvitationsLegacyRequest struct {
	PathParams  TeamsListPendingInvitationsLegacyPathParams
	QueryParams TeamsListPendingInvitationsLegacyQueryParams
}

type TeamsListPendingInvitationsLegacyResponse struct {
	ContentType             string
	Headers                 map[string][]string
	StatusCode              int64
	OrganizationInvitations []shared.OrganizationInvitation
}
