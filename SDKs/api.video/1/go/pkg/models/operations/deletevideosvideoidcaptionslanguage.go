package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVideosVideoIDCaptionsLanguagePathParams struct {
	Language string `pathParam:"style=simple,explode=false,name=language"`
	VideoID  string `pathParam:"style=simple,explode=false,name=videoId"`
}

type DeleteVideosVideoIDCaptionsLanguageSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type DeleteVideosVideoIDCaptionsLanguageRequest struct {
	PathParams DeleteVideosVideoIDCaptionsLanguagePathParams
	Security   DeleteVideosVideoIDCaptionsLanguageSecurity
}

type DeleteVideosVideoIDCaptionsLanguageResponse struct {
	ContentType string
	StatusCode  int64
	NotFound    *shared.NotFound
}
