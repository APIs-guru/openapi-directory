package operations

import (
	"openapi/pkg/models/shared"
)

type AppsDeleteTokenPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
}

type AppsDeleteTokenRequestBody struct {
	AccessToken string `json:"access_token"`
}

type AppsDeleteTokenRequest struct {
	PathParams AppsDeleteTokenPathParams
	Request    *AppsDeleteTokenRequestBody `request:"mediaType=application/json"`
}

type AppsDeleteTokenResponse struct {
	ContentType     string
	StatusCode      int64
	ValidationError *shared.ValidationError
}
