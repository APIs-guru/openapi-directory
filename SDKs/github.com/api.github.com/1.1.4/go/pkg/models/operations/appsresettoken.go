package operations

import (
	"openapi/pkg/models/shared"
)

type AppsResetTokenPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
}

type AppsResetTokenRequestBody struct {
	AccessToken string `json:"access_token"`
}

type AppsResetTokenRequest struct {
	PathParams AppsResetTokenPathParams
	Request    *AppsResetTokenRequestBody `request:"mediaType=application/json"`
}

type AppsResetTokenResponse struct {
	ContentType     string
	StatusCode      int64
	Authorization   *shared.Authorization
	ValidationError *shared.ValidationError
}
