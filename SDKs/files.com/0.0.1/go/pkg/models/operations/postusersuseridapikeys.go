package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PostUsersUserIDAPIKeysPathParams struct {
	UserID int32 `pathParam:"style=simple,explode=false,name=user_id"`
}

type PostUsersUserIDAPIKeysRequestBodyPermissionSetEnum string

const (
	PostUsersUserIDAPIKeysRequestBodyPermissionSetEnumNone              PostUsersUserIDAPIKeysRequestBodyPermissionSetEnum = "none"
	PostUsersUserIDAPIKeysRequestBodyPermissionSetEnumFull              PostUsersUserIDAPIKeysRequestBodyPermissionSetEnum = "full"
	PostUsersUserIDAPIKeysRequestBodyPermissionSetEnumDesktopApp        PostUsersUserIDAPIKeysRequestBodyPermissionSetEnum = "desktop_app"
	PostUsersUserIDAPIKeysRequestBodyPermissionSetEnumSyncApp           PostUsersUserIDAPIKeysRequestBodyPermissionSetEnum = "sync_app"
	PostUsersUserIDAPIKeysRequestBodyPermissionSetEnumOfficeIntegration PostUsersUserIDAPIKeysRequestBodyPermissionSetEnum = "office_integration"
	PostUsersUserIDAPIKeysRequestBodyPermissionSetEnumMobileApp         PostUsersUserIDAPIKeysRequestBodyPermissionSetEnum = "mobile_app"
)

type PostUsersUserIDAPIKeysRequestBody struct {
	ExpiresAt     *time.Time                                          `multipartForm:"name=expires_at"`
	Name          *string                                             `multipartForm:"name=name"`
	Path          *string                                             `multipartForm:"name=path"`
	PermissionSet *PostUsersUserIDAPIKeysRequestBodyPermissionSetEnum `multipartForm:"name=permission_set"`
}

type PostUsersUserIDAPIKeysRequest struct {
	PathParams PostUsersUserIDAPIKeysPathParams
	Request    *PostUsersUserIDAPIKeysRequestBody `request:"mediaType=multipart/form-data"`
}

type PostUsersUserIDAPIKeysResponse struct {
	APIKeyEntity *shared.APIKeyEntity
	ContentType  string
	StatusCode   int64
}
