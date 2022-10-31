package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAdConfigHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type CreateAdConfigRequest struct {
	Headers CreateAdConfigHeaders
	Request shared.CreateActiveDirectoryConfigRequest `request:"mediaType=application/json"`
}

type CreateAdConfigResponse struct {
	ActiveDirectoryConfig *shared.ActiveDirectoryConfig
	ContentType           string
	ErrorResponse         *shared.ErrorResponse
	StatusCode            int64
}
