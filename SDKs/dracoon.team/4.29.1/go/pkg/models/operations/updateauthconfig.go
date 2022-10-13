package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAuthConfigHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type UpdateAuthConfigRequest struct {
	Headers UpdateAuthConfigHeaders
	Request shared.AuthConfig `request:"mediaType=application/json"`
}

type UpdateAuthConfigResponse struct {
	AuthConfig    *shared.AuthConfig
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
