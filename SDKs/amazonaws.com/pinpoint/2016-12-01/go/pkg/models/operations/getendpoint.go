package operations

import (
	"openapi/pkg/models/shared"
)

type GetEndpointPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	EndpointID    string `pathParam:"style=simple,explode=false,name=endpoint-id"`
}

type GetEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEndpointRequest struct {
	PathParams GetEndpointPathParams
	Headers    GetEndpointHeaders
}

type GetEndpointResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	GetEndpointResponse          *shared.GetEndpointResponse
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
