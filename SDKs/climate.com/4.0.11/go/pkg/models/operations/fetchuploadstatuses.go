package operations

import (
	"openapi/pkg/models/shared"
)

type FetchUploadStatusesSecurityOption1 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type FetchUploadStatusesSecurityOption2 struct {
	Oauth2AuthorizationCode shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type FetchUploadStatusesSecurity struct {
	Option1 *FetchUploadStatusesSecurityOption1 `security:"option"`
	Option2 *FetchUploadStatusesSecurityOption2 `security:"option"`
}

type FetchUploadStatusesRequest struct {
	Request  *shared.UploadStatusQuery `request:"mediaType=application/json"`
	Security FetchUploadStatusesSecurity
}

type FetchUploadStatusesResponse struct {
	ContentType    string
	Error          *shared.Error
	Headers        map[string][]string
	StatusCode     int64
	UploadStatuses *shared.UploadStatuses
}
