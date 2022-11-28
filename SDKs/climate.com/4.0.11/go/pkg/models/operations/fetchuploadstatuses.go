package operations

import (
	"openapi/pkg/models/shared"
)

type FetchUploadStatusesSecurity struct {
	APIKey                  *shared.SchemeAPIKey                  `security:"scheme,type=apiKey,subtype=header"`
	Oauth2AuthorizationCode *shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
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
