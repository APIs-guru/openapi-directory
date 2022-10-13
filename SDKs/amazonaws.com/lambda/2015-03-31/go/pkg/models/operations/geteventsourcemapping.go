package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventSourceMappingPathParams struct {
	UUID string `pathParam:"style=simple,explode=false,name=UUID"`
}

type GetEventSourceMappingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEventSourceMappingRequest struct {
	PathParams GetEventSourceMappingPathParams
	Headers    GetEventSourceMappingHeaders
}

type GetEventSourceMappingResponse struct {
	ContentType                     string
	EventSourceMappingConfiguration *shared.EventSourceMappingConfiguration
	InvalidParameterValueException  *interface{}
	ResourceNotFoundException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}
