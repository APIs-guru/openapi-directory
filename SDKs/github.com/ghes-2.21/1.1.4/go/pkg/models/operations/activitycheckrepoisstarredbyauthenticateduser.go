package operations

import (
	"openapi/pkg/models/shared"
)

type ActivityCheckRepoIsStarredByAuthenticatedUserPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ActivityCheckRepoIsStarredByAuthenticatedUserRequest struct {
	PathParams ActivityCheckRepoIsStarredByAuthenticatedUserPathParams
}

type ActivityCheckRepoIsStarredByAuthenticatedUserResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
