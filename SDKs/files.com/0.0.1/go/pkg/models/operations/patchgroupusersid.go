package operations

import (
	"openapi/pkg/models/shared"
)

type PatchGroupUsersIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PatchGroupUsersIDRequestBody struct {
	Admin   *bool `multipartForm:"name=admin"`
	GroupID int32 `multipartForm:"name=group_id"`
	UserID  int32 `multipartForm:"name=user_id"`
}

type PatchGroupUsersIDRequest struct {
	PathParams PatchGroupUsersIDPathParams
	Request    PatchGroupUsersIDRequestBody `request:"mediaType=multipart/form-data"`
}

type PatchGroupUsersIDResponse struct {
	ContentType     string
	GroupUserEntity *shared.GroupUserEntity
	StatusCode      int64
}
