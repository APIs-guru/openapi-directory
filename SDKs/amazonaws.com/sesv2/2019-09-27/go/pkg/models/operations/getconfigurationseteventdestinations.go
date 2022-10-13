package operations

import (
	"openapi/pkg/models/shared"
)

type GetConfigurationSetEventDestinationsPathParams struct {
	ConfigurationSetName string `pathParam:"style=simple,explode=false,name=ConfigurationSetName"`
}

type GetConfigurationSetEventDestinationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetConfigurationSetEventDestinationsRequest struct {
	PathParams GetConfigurationSetEventDestinationsPathParams
	Headers    GetConfigurationSetEventDestinationsHeaders
}

type GetConfigurationSetEventDestinationsResponse struct {
	BadRequestException                          *interface{}
	ContentType                                  string
	GetConfigurationSetEventDestinationsResponse *shared.GetConfigurationSetEventDestinationsResponse
	NotFoundException                            *interface{}
	StatusCode                                   int64
	TooManyRequestsException                     *interface{}
}
