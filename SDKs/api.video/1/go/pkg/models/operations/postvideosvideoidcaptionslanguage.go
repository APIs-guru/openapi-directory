package operations

import (
	"openapi/pkg/models/shared"
)

type PostVideosVideoIDCaptionsLanguagePathParams struct {
	Language string `pathParam:"style=simple,explode=false,name=language"`
	VideoID  string `pathParam:"style=simple,explode=false,name=videoId"`
}

type PostVideosVideoIDCaptionsLanguageSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type PostVideosVideoIDCaptionsLanguageRequest struct {
	PathParams PostVideosVideoIDCaptionsLanguagePathParams
	Request    *shared.CaptionsUploadPayload `request:"mediaType=multipart/form-data"`
	Security   PostVideosVideoIDCaptionsLanguageSecurity
}

type PostVideosVideoIDCaptionsLanguageResponse struct {
	ContentType string
	StatusCode  int64
	BadRequest  *shared.BadRequest
	NotFound    *shared.NotFound
	Subtitle    *shared.Subtitle
}
