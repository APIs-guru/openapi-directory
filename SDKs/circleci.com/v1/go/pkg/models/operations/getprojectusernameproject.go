package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectUsernameProjectPathParams struct {
	Project  string `pathParam:"style=simple,explode=false,name=project"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetProjectUsernameProjectQueryParams struct {
	Filter *shared.FilterEnum `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int64             `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64             `queryParam:"style=form,explode=true,name=offset"`
}

type GetProjectUsernameProjectRequest struct {
	PathParams  GetProjectUsernameProjectPathParams
	QueryParams GetProjectUsernameProjectQueryParams
}

type GetProjectUsernameProjectResponse struct {
	Builds      []shared.Build
	ContentType string
	StatusCode  int64
}
