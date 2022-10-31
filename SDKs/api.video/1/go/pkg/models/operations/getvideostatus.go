package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideoStatusPathParams struct {
	VideoID string `pathParam:"style=simple,explode=false,name=videoId"`
}

type GetVideoStatusSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetVideoStatusRequest struct {
	PathParams GetVideoStatusPathParams
	Security   GetVideoStatusSecurity
}

type GetVideoStatusResponse struct {
	ContentType string
	StatusCode  int64
	NotFound    *shared.NotFound
	Videostatus *shared.Videostatus
}
