package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PostAPIKeysRequestBodyPermissionSetEnum string

const (
	PostAPIKeysRequestBodyPermissionSetEnumNone              PostAPIKeysRequestBodyPermissionSetEnum = "none"
	PostAPIKeysRequestBodyPermissionSetEnumFull              PostAPIKeysRequestBodyPermissionSetEnum = "full"
	PostAPIKeysRequestBodyPermissionSetEnumDesktopApp        PostAPIKeysRequestBodyPermissionSetEnum = "desktop_app"
	PostAPIKeysRequestBodyPermissionSetEnumSyncApp           PostAPIKeysRequestBodyPermissionSetEnum = "sync_app"
	PostAPIKeysRequestBodyPermissionSetEnumOfficeIntegration PostAPIKeysRequestBodyPermissionSetEnum = "office_integration"
	PostAPIKeysRequestBodyPermissionSetEnumMobileApp         PostAPIKeysRequestBodyPermissionSetEnum = "mobile_app"
)

type PostAPIKeysRequestBody struct {
	ExpiresAt     *time.Time                               `multipartForm:"name=expires_at"`
	Name          *string                                  `multipartForm:"name=name"`
	Path          *string                                  `multipartForm:"name=path"`
	PermissionSet *PostAPIKeysRequestBodyPermissionSetEnum `multipartForm:"name=permission_set"`
	UserID        *int32                                   `multipartForm:"name=user_id"`
}

type PostAPIKeysRequest struct {
	Request *PostAPIKeysRequestBody `request:"mediaType=multipart/form-data"`
}

type PostAPIKeysResponse struct {
	APIKeyEntity *shared.APIKeyEntity
	ContentType  string
	StatusCode   int64
}
