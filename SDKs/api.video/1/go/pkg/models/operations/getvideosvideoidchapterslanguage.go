package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideosVideoIDChaptersLanguagePathParams struct {
	Language string `pathParam:"style=simple,explode=false,name=language"`
	VideoID  string `pathParam:"style=simple,explode=false,name=videoId"`
}

type GetVideosVideoIDChaptersLanguageSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetVideosVideoIDChaptersLanguageRequest struct {
	PathParams GetVideosVideoIDChaptersLanguagePathParams
	Security   GetVideosVideoIDChaptersLanguageSecurity
}

type GetVideosVideoIDChaptersLanguageResponse struct {
	ContentType string
	StatusCode  int64
	Chapter     *shared.Chapter
	NotFound    *shared.NotFound
}
