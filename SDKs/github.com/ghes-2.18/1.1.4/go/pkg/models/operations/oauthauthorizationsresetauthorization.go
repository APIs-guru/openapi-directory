package operations

import (
	"openapi/pkg/models/shared"
)

type OauthAuthorizationsResetAuthorizationPathParams struct {
	AccessToken string `pathParam:"style=simple,explode=false,name=access_token"`
	ClientID    string `pathParam:"style=simple,explode=false,name=client_id"`
}

type OauthAuthorizationsResetAuthorizationRequest struct {
	PathParams OauthAuthorizationsResetAuthorizationPathParams
}

type OauthAuthorizationsResetAuthorizationResponse struct {
	ContentType           string
	StatusCode            int64
	AuthorizationWithUser *shared.AuthorizationWithUser
}
