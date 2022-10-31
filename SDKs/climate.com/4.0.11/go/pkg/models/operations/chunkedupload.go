package operations

import (
	"openapi/pkg/models/shared"
)

type ChunkedUploadPathParams struct {
	UploadID string `pathParam:"style=simple,explode=false,name=uploadId"`
}

type ChunkedUploadHeaders struct {
	ContentRange string `header:"style=simple,explode=false,name=Content-Range"`
	ContentType  string `header:"style=simple,explode=false,name=Content-Type"`
}

type ChunkedUploadSecurityOption1 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ChunkedUploadSecurityOption2 struct {
	Oauth2AuthorizationCode shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type ChunkedUploadSecurity struct {
	Option1 *ChunkedUploadSecurityOption1 `security:"option"`
	Option2 *ChunkedUploadSecurityOption2 `security:"option"`
}

type ChunkedUploadRequest struct {
	PathParams ChunkedUploadPathParams
	Headers    ChunkedUploadHeaders
	Security   ChunkedUploadSecurity
}

type ChunkedUploadResponse struct {
	ContentType string
	Error       *shared.Error
	Headers     map[string][]string
	StatusCode  int64
}
