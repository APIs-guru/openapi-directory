package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsGetMembershipForUserInOrgPathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type TeamsGetMembershipForUserInOrgRequest struct {
	PathParams TeamsGetMembershipForUserInOrgPathParams
}

type TeamsGetMembershipForUserInOrgResponse struct {
	ContentType    string
	StatusCode     int64
	TeamMembership *shared.TeamMembership
}
