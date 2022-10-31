package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsGetMembershipForUserLegacyPathParams struct {
	TeamID   int64  `pathParam:"style=simple,explode=false,name=team_id"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type TeamsGetMembershipForUserLegacyRequest struct {
	PathParams TeamsGetMembershipForUserLegacyPathParams
}

type TeamsGetMembershipForUserLegacyResponse struct {
	ContentType    string
	StatusCode     int64
	BasicError     *shared.BasicError
	TeamMembership *shared.TeamMembership
}
