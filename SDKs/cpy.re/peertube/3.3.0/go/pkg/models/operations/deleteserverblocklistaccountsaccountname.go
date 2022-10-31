package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteServerBlocklistAccountsAccountNamePathParams struct {
	AccountName string `pathParam:"style=simple,explode=false,name=accountName"`
}

type DeleteServerBlocklistAccountsAccountNameSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteServerBlocklistAccountsAccountNameRequest struct {
	PathParams DeleteServerBlocklistAccountsAccountNamePathParams
	Security   DeleteServerBlocklistAccountsAccountNameSecurity
}

type DeleteServerBlocklistAccountsAccountNameResponse struct {
	ContentType string
	StatusCode  int64
}
