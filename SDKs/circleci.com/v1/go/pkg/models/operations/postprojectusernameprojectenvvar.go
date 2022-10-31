package operations

import (
	"openapi/pkg/models/shared"
)

type PostProjectUsernameProjectEnvvarPathParams struct {
	Project  string `pathParam:"style=simple,explode=false,name=project"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type PostProjectUsernameProjectEnvvarRequest struct {
	PathParams PostProjectUsernameProjectEnvvarPathParams
}

type PostProjectUsernameProjectEnvvarResponse struct {
	ContentType string
	Envvar      *shared.Envvar
	StatusCode  int64
}
