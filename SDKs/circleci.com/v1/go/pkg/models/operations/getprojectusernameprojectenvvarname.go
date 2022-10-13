package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectUsernameProjectEnvvarNamePathParams struct {
	Name     string `pathParam:"style=simple,explode=false,name=name"`
	Project  string `pathParam:"style=simple,explode=false,name=project"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetProjectUsernameProjectEnvvarNameRequest struct {
	PathParams GetProjectUsernameProjectEnvvarNamePathParams
}

type GetProjectUsernameProjectEnvvarNameResponse struct {
	ContentType string
	Envvar      *shared.Envvar
	StatusCode  int64
}
