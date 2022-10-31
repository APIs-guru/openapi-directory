package operations

import (
	"openapi/pkg/models/shared"
)

type PostUserRequestsRequestBody struct {
	Details string `multipartForm:"name=details"`
	Email   string `multipartForm:"name=email"`
	Name    string `multipartForm:"name=name"`
}

type PostUserRequestsRequest struct {
	Request PostUserRequestsRequestBody `request:"mediaType=multipart/form-data"`
}

type PostUserRequestsResponse struct {
	ContentType       string
	StatusCode        int64
	UserRequestEntity *shared.UserRequestEntity
}
