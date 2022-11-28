package operations

import (
	"openapi/pkg/models/shared"
)

type UploadBoundarySecurity struct {
	APIKey                  *shared.SchemeAPIKey                  `security:"scheme,type=apiKey,subtype=header"`
	Oauth2AuthorizationCode *shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type UploadBoundaryRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security UploadBoundarySecurity
}

type UploadBoundaryResponse struct {
	ContentType        string
	Error              *shared.Error
	Headers            map[string][]string
	StatusCode         int64
	UploadedBoundaryID *interface{}
}
