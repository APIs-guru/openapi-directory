package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectUsernameProjectEnvvarPathParams struct {
	Project  string `pathParam:"style=simple,explode=false,name=project"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetProjectUsernameProjectEnvvarRequest struct {
	PathParams GetProjectUsernameProjectEnvvarPathParams
}

type GetProjectUsernameProjectEnvvarResponse struct {
	ContentType string
	Envvars     []shared.Envvar
	StatusCode  int64
}
