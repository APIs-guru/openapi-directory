package operations

type TeamsRemoveProjectPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
	TeamID    int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsRemoveProjectRequest struct {
	PathParams TeamsRemoveProjectPathParams
}

type TeamsRemoveProjectResponse struct {
	ContentType string
	StatusCode  int64
}
