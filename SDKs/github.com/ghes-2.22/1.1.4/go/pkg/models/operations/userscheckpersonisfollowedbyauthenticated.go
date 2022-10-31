package operations

import (
	"openapi/pkg/models/shared"
)

type UsersCheckPersonIsFollowedByAuthenticatedPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type UsersCheckPersonIsFollowedByAuthenticatedRequest struct {
	PathParams UsersCheckPersonIsFollowedByAuthenticatedPathParams
}

type UsersCheckPersonIsFollowedByAuthenticatedResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
