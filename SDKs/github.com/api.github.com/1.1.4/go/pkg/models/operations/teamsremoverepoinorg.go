package operations

type TeamsRemoveRepoInOrgPathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	Owner    string `pathParam:"style=simple,explode=false,name=owner"`
	Repo     string `pathParam:"style=simple,explode=false,name=repo"`
	TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type TeamsRemoveRepoInOrgRequest struct {
	PathParams TeamsRemoveRepoInOrgPathParams
}

type TeamsRemoveRepoInOrgResponse struct {
	ContentType string
	StatusCode  int64
}
