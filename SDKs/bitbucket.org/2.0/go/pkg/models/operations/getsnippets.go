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

type GetSnippetsSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetSnippetsSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetSnippetsSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetSnippetsSecurity struct {
	Option1 *GetSnippetsSecurityOption1 `security:"option"`
	Option2 *GetSnippetsSecurityOption2 `security:"option"`
	Option3 *GetSnippetsSecurityOption3 `security:"option"`
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
