package operations

import (
	"openapi/pkg/models/shared"
)

type PutEventStreamPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type PutEventStreamHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutEventStreamRequestBodyWriteEventStream struct {
	DestinationStreamArn *string `json:"DestinationStreamArn,omitempty"`
	RoleArn              *string `json:"RoleArn,omitempty"`
}

type PutEventStreamRequestBody struct {
	WriteEventStream PutEventStreamRequestBodyWriteEventStream `json:"WriteEventStream"`
}

type PutEventStreamRequest struct {
	PathParams PutEventStreamPathParams
	Headers    PutEventStreamHeaders
	Request    PutEventStreamRequestBody `request:"mediaType=application/json"`
}

type PutEventStreamResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	PutEventStreamResponse       *shared.PutEventStreamResponse
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
