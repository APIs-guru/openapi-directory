package operations

import (
	"openapi/pkg/models/shared"
)

type GetAuthorizationCodeIDQueryParams struct {
	CodeChallenge       *string `queryParam:"style=form,explode=true,name=Code_challenge"`
	CodeChallengeMethod *string `queryParam:"style=form,explode=true,name=Code_challenge_method"`
	VerifiedMobile      *int64  `queryParam:"style=form,explode=true,name=Verified_mobile"`
	ClientID            *string `queryParam:"style=form,explode=true,name=client_id"`
	DlFlow              *string `queryParam:"style=form,explode=true,name=dl_flow"`
	RedirectURI         string  `queryParam:"style=form,explode=true,name=redirect_uri"`
	ResponseType        string  `queryParam:"style=form,explode=true,name=response_type"`
	State               string  `queryParam:"style=form,explode=true,name=state"`
}

type GetAuthorizationCodeIDSecurity struct {
	OauthAuthorizeCode shared.SchemeOauthAuthorizeCode `security:"scheme,type=oauth2"`
}

type GetAuthorizationCodeIDRequest struct {
	QueryParams GetAuthorizationCodeIDQueryParams
	Security    GetAuthorizationCodeIDSecurity
}

type GetAuthorizationCodeIDResponse struct {
	ContentType string
	Sample      *interface{}
	StatusCode  int64
}
