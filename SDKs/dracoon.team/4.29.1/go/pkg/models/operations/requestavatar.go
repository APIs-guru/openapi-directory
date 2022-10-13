package operations

import (
	"openapi/pkg/models/shared"
)

type RequestAvatarHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestAvatarRequest struct {
	Headers RequestAvatarHeaders
}

type RequestAvatarResponse struct {
	Avatar        *shared.Avatar
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
