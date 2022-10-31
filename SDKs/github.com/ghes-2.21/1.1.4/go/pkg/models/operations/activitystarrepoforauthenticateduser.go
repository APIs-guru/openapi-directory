package operations

import (
	"openapi/pkg/models/shared"
)

type ActivityStarRepoForAuthenticatedUserPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ActivityStarRepoForAuthenticatedUserRequest struct {
	PathParams ActivityStarRepoForAuthenticatedUserPathParams
}

type ActivityStarRepoForAuthenticatedUserResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
