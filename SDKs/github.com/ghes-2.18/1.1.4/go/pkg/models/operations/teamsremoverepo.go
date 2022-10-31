package operations

type TeamsRemoveRepoPathParams struct {
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
	TeamID int64  `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsRemoveRepoRequest struct {
	PathParams TeamsRemoveRepoPathParams
}

type TeamsRemoveRepoResponse struct {
	ContentType string
	StatusCode  int64
}
