package operations

import (
	"openapi/pkg/models/shared"
)

type GetConfigurationSetPathParams struct {
	ConfigurationSetName string `pathParam:"style=simple,explode=false,name=ConfigurationSetName"`
}

type GetConfigurationSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetConfigurationSetRequest struct {
	PathParams GetConfigurationSetPathParams
	Headers    GetConfigurationSetHeaders
}

type GetConfigurationSetResponse struct {
	BadRequestException         *interface{}
	ContentType                 string
	GetConfigurationSetResponse *shared.GetConfigurationSetResponse
	NotFoundException           *interface{}
	StatusCode                  int64
	TooManyRequestsException    *interface{}
}
