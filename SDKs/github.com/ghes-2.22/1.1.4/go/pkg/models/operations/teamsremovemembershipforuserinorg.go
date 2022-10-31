package operations

type TeamsRemoveMembershipForUserInOrgPathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type TeamsRemoveMembershipForUserInOrgRequest struct {
	PathParams TeamsRemoveMembershipForUserInOrgPathParams
}

type TeamsRemoveMembershipForUserInOrgResponse struct {
	ContentType string
	StatusCode  int64
}
