package operations

import (
	"openapi/pkg/models/shared"
)

type PostVideoSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type PostVideoRequest struct {
	Request  *shared.VideoCreatePayload `request:"mediaType=application/json"`
	Security PostVideoSecurity
}

type PostVideoResponse struct {
	ContentType string
	StatusCode  int64
	BadRequest  *shared.BadRequest
	Video       *shared.Video
}
