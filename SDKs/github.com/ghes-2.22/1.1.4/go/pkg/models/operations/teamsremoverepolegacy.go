package operations

type TeamsRemoveRepoLegacyPathParams struct {
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
	TeamID int64  `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsRemoveRepoLegacyRequest struct {
	PathParams TeamsRemoveRepoLegacyPathParams
}

type TeamsRemoveRepoLegacyResponse struct {
	ContentType string
	StatusCode  int64
}
