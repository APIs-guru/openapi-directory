package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEventStreamPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type DeleteEventStreamHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteEventStreamRequest struct {
	PathParams DeleteEventStreamPathParams
	Headers    DeleteEventStreamHeaders
}

type DeleteEventStreamResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DeleteEventStreamResponse    *shared.DeleteEventStreamResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
