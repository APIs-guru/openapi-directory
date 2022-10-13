package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsListInvitationTeamsPathParams struct {
	InvitationID int64  `pathParam:"style=simple,explode=false,name=invitation_id"`
	Org          string `pathParam:"style=simple,explode=false,name=org"`
}

type OrgsListInvitationTeamsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type OrgsListInvitationTeamsRequest struct {
	PathParams  OrgsListInvitationTeamsPathParams
	QueryParams OrgsListInvitationTeamsQueryParams
}

type OrgsListInvitationTeamsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	BasicError  *shared.BasicError
	Teams       []shared.Team
}
