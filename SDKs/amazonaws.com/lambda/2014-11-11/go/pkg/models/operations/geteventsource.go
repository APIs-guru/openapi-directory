package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventSourcePathParams struct {
	UUID string `pathParam:"style=simple,explode=false,name=UUID"`
}

type GetEventSourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEventSourceRequest struct {
	PathParams GetEventSourcePathParams
	Headers    GetEventSourceHeaders
}

type GetEventSourceResponse struct {
	ContentType                    string
	EventSourceConfiguration       *shared.EventSourceConfiguration
	InvalidParameterValueException *shared.InvalidParameterValueException
	ResourceNotFoundException      *shared.ResourceNotFoundException
	ServiceException               *shared.ServiceException
	StatusCode                     int64
}
