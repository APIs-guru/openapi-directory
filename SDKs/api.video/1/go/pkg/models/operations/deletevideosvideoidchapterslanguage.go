package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVideosVideoIDChaptersLanguagePathParams struct {
	Language string `pathParam:"style=simple,explode=false,name=language"`
	VideoID  string `pathParam:"style=simple,explode=false,name=videoId"`
}

type DeleteVideosVideoIDChaptersLanguageSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type DeleteVideosVideoIDChaptersLanguageRequest struct {
	PathParams DeleteVideosVideoIDChaptersLanguagePathParams
	Security   DeleteVideosVideoIDChaptersLanguageSecurity
}

type DeleteVideosVideoIDChaptersLanguageResponse struct {
	ContentType string
	StatusCode  int64
	NotFound    *shared.NotFound
}
