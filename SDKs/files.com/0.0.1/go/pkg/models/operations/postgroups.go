package operations

import (
	"openapi/pkg/models/shared"
)

type PostGroupsRequestBody struct {
	AdminIds *string `multipartForm:"name=admin_ids"`
	Name     *string `multipartForm:"name=name"`
	Notes    *string `multipartForm:"name=notes"`
	UserIds  *string `multipartForm:"name=user_ids"`
}

type PostGroupsRequest struct {
	Request *PostGroupsRequestBody `request:"mediaType=multipart/form-data"`
}

type PostGroupsResponse struct {
	ContentType string
	GroupEntity *shared.GroupEntity
	StatusCode  int64
}
