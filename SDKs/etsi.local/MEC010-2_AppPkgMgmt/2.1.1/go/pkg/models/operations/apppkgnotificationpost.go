package operations

import (
	"openapi/pkg/models/shared"
)

type AppPkgNotificationPostRequest struct {
	Request shared.AppPkgNotification `request:"mediaType=application/json"`
}

type AppPkgNotificationPostResponse struct {
	ContentType    string
	ProblemDetails *shared.ProblemDetails
	StatusCode     int64
}
