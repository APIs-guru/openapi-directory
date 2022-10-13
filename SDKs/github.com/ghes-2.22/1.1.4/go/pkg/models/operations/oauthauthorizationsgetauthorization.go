package operations

import (
	"openapi/pkg/models/shared"
)

type OauthAuthorizationsGetAuthorizationPathParams struct {
	AuthorizationID int64 `pathParam:"style=simple,explode=false,name=authorization_id"`
}

type OauthAuthorizationsGetAuthorizationRequest struct {
	PathParams OauthAuthorizationsGetAuthorizationPathParams
}

type OauthAuthorizationsGetAuthorizationResponse struct {
	ContentType   string
	StatusCode    int64
	Authorization *shared.Authorization
	BasicError    *shared.BasicError
}
