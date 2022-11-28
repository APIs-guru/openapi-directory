package operations

import (
	"openapi/pkg/models/shared"
)

type FetchUploadStatusByIDPathParams struct {
	UploadID string `pathParam:"style=simple,explode=false,name=uploadId"`
}

type FetchUploadStatusByIDSecurity struct {
	APIKey                  *shared.SchemeAPIKey                  `security:"scheme,type=apiKey,subtype=header"`
	Oauth2AuthorizationCode *shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type FetchUploadStatusByIDRequest struct {
	PathParams FetchUploadStatusByIDPathParams
	Security   FetchUploadStatusByIDSecurity
}

type FetchUploadStatusByIDResponse struct {
	ContentType  string
	Error        *shared.Error
	Headers      map[string][]string
	StatusCode   int64
	UploadStatus *shared.UploadStatus
}
