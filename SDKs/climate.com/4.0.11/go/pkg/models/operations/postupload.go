package operations

import (
	"openapi/pkg/models/shared"
)

type PostUploadHeaders struct {
	XRecipientEmail *string `header:"style=simple,explode=false,name=X-Recipient-Email"`
}

type PostUploadSecurity struct {
	APIKey                  *shared.SchemeAPIKey                  `security:"scheme,type=apiKey,subtype=header"`
	Oauth2AuthorizationCode *shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type PostUploadRequest struct {
	Headers  PostUploadHeaders
	Request  *shared.Upload `request:"mediaType=application/json"`
	Security PostUploadSecurity
}

type PostUploadResponse struct {
	ContentType   string
	CreatedUpload *string
	Error         *shared.Error
	Headers       map[string][]string
	StatusCode    int64
}
