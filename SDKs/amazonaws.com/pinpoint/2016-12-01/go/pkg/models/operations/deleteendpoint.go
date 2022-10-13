package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEndpointPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	EndpointID    string `pathParam:"style=simple,explode=false,name=endpoint-id"`
}

type DeleteEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteEndpointRequest struct {
	PathParams DeleteEndpointPathParams
	Headers    DeleteEndpointHeaders
}

type DeleteEndpointResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DeleteEndpointResponse       *shared.DeleteEndpointResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
