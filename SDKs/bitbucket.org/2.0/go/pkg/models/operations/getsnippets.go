package operations

import (
	"openapi/pkg/models/shared"
)

type GetSnippetsRoleEnum string

const (
	GetSnippetsRoleEnumOwner       GetSnippetsRoleEnum = "owner"
	GetSnippetsRoleEnumContributor GetSnippetsRoleEnum = "contributor"
	GetSnippetsRoleEnumMember      GetSnippetsRoleEnum = "member"
)

type GetSnippetsQueryParams struct {
	Role *GetSnippetsRoleEnum `queryParam:"style=form,explode=true,name=role"`
}

type GetSnippetsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetSnippetsRequest struct {
	QueryParams GetSnippetsQueryParams
	Security    GetSnippetsSecurity
}

type GetSnippetsResponse struct {
	ContentType       string
	StatusCode        int64
	Error             map[string]interface{}
	PaginatedSnippets *shared.PaginatedSnippets
}
