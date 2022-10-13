package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVideoPathParams struct {
	VideoID string `pathParam:"style=simple,explode=false,name=videoId"`
}

type DeleteVideoSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type DeleteVideoRequest struct {
	PathParams DeleteVideoPathParams
	Security   DeleteVideoSecurity
}

type DeleteVideoResponse struct {
	ContentType string
	StatusCode  int64
	NotFound    *shared.NotFound
}
