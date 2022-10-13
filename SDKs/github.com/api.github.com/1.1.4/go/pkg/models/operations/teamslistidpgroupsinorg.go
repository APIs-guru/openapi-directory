package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsListIdpGroupsInOrgPathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type TeamsListIdpGroupsInOrgRequest struct {
	PathParams TeamsListIdpGroupsInOrgPathParams
}

type TeamsListIdpGroupsInOrgResponse struct {
	ContentType  string
	StatusCode   int64
	GroupMapping *shared.GroupMapping
}
