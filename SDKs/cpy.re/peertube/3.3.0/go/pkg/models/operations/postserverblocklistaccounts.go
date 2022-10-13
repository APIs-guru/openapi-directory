package operations

import (
	"openapi/pkg/models/shared"
)

type PostServerBlocklistAccountsRequestBody struct {
	AccountName string `json:"accountName"`
}

type PostServerBlocklistAccountsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PostServerBlocklistAccountsRequest struct {
	Request  *PostServerBlocklistAccountsRequestBody `request:"mediaType=application/json"`
	Security PostServerBlocklistAccountsSecurity
}

type PostServerBlocklistAccountsResponse struct {
	ContentType string
	StatusCode  int64
}
