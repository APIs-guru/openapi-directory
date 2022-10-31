package operations

import (
	"openapi/pkg/models/shared"
)

type GetSnippetsWorkspaceEncodedIDCommitsPathParams struct {
	EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetSnippetsWorkspaceEncodedIDCommitsSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetSnippetsWorkspaceEncodedIDCommitsSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetSnippetsWorkspaceEncodedIDCommitsSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetSnippetsWorkspaceEncodedIDCommitsSecurity struct {
	Option1 *GetSnippetsWorkspaceEncodedIDCommitsSecurityOption1 `security:"option"`
	Option2 *GetSnippetsWorkspaceEncodedIDCommitsSecurityOption2 `security:"option"`
	Option3 *GetSnippetsWorkspaceEncodedIDCommitsSecurityOption3 `security:"option"`
}

type GetSnippetsWorkspaceEncodedIDCommitsRequest struct {
	PathParams GetSnippetsWorkspaceEncodedIDCommitsPathParams
	Security   GetSnippetsWorkspaceEncodedIDCommitsSecurity
}

type GetSnippetsWorkspaceEncodedIDCommitsResponse struct {
	ContentType            string
	StatusCode             int64
	Error                  map[string]interface{}
	PaginatedSnippetCommit *shared.PaginatedSnippetCommit
}
