package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideosVideoIDCaptionsLanguagePathParams struct {
	Language string `pathParam:"style=simple,explode=false,name=language"`
	VideoID  string `pathParam:"style=simple,explode=false,name=videoId"`
}

type GetVideosVideoIDCaptionsLanguageSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetVideosVideoIDCaptionsLanguageRequest struct {
	PathParams GetVideosVideoIDCaptionsLanguagePathParams
	Security   GetVideosVideoIDCaptionsLanguageSecurity
}

type GetVideosVideoIDCaptionsLanguageResponse struct {
	ContentType string
	StatusCode  int64
	NotFound    *shared.NotFound
	Subtitle    *shared.Subtitle
}
