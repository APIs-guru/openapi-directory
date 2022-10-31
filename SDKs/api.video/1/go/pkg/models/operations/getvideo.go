package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideoPathParams struct {
	VideoID string `pathParam:"style=simple,explode=false,name=videoId"`
}

type GetVideoSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetVideoRequest struct {
	PathParams GetVideoPathParams
	Security   GetVideoSecurity
}

type GetVideoResponse struct {
	ContentType string
	StatusCode  int64
	NotFound    *shared.NotFound
	Video       *shared.Video
}
