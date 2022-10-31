package operations

import (
	"openapi/pkg/models/shared"
)

type ActivityUnstarRepoForAuthenticatedUserPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ActivityUnstarRepoForAuthenticatedUserRequest struct {
	PathParams ActivityUnstarRepoForAuthenticatedUserPathParams
}

type ActivityUnstarRepoForAuthenticatedUserResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
