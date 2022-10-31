package operations

import (
	"openapi/pkg/models/shared"
)

type FetchUploadStatusByIDPathParams struct {
	UploadID string `pathParam:"style=simple,explode=false,name=uploadId"`
}

type FetchUploadStatusByIDSecurityOption1 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type FetchUploadStatusByIDSecurityOption2 struct {
	Oauth2AuthorizationCode shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type FetchUploadStatusByIDSecurity struct {
	Option1 *FetchUploadStatusByIDSecurityOption1 `security:"option"`
	Option2 *FetchUploadStatusByIDSecurityOption2 `security:"option"`
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
