package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveEventSourcePathParams struct {
	UUID string `pathParam:"style=simple,explode=false,name=UUID"`
}

type RemoveEventSourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type RemoveEventSourceRequest struct {
	PathParams RemoveEventSourcePathParams
	Headers    RemoveEventSourceHeaders
}

type RemoveEventSourceResponse struct {
	ContentType                    string
	InvalidParameterValueException *shared.InvalidParameterValueException
	ResourceNotFoundException      *shared.ResourceNotFoundException
	ServiceException               *shared.ServiceException
	StatusCode                     int64
}
