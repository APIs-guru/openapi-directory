package operations

import (
	"openapi/pkg/models/shared"
)

type PostSnippetsWorkspaceEncodedIDCommentsPathParams struct {
	EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostSnippetsWorkspaceEncodedIDCommentsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostSnippetsWorkspaceEncodedIDCommentsRequest struct {
	PathParams PostSnippetsWorkspaceEncodedIDCommentsPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PostSnippetsWorkspaceEncodedIDCommentsSecurity
}

type PostSnippetsWorkspaceEncodedIDCommentsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Error       map[string]interface{}
	Snippet     map[string]interface{}
}
