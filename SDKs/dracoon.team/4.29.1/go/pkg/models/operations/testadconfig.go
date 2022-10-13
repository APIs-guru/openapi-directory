package operations

import (
	"openapi/pkg/models/shared"
)

type TestAdConfigHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type TestAdConfigRequest struct {
	Headers TestAdConfigHeaders
	Request shared.TestActiveDirectoryConfigRequest `request:"mediaType=application/json"`
}

type TestAdConfigResponse struct {
	ContentType                       string
	ErrorResponse                     *shared.ErrorResponse
	StatusCode                        int64
	TestActiveDirectoryConfigResponse *shared.TestActiveDirectoryConfigResponse
}
