package operations

import (
	"openapi/pkg/models/shared"
)

type RequestAuthConfigHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RequestAuthConfigRequest struct {
	Headers RequestAuthConfigHeaders
}

type RequestAuthConfigResponse struct {
	AuthConfig    *shared.AuthConfig
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
