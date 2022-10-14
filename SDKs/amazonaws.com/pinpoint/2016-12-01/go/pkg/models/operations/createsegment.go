package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSegmentPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type CreateSegmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateSegmentRequestBodyWriteSegmentRequest struct {
	Dimensions    *shared.SegmentDimensions `json:"Dimensions,omitempty"`
	Name          *string                   `json:"Name,omitempty"`
	SegmentGroups *shared.SegmentGroupList  `json:"SegmentGroups,omitempty"`
	Tags          map[string]string         `json:"tags,omitempty"`
}

type CreateSegmentRequestBody struct {
	WriteSegmentRequest CreateSegmentRequestBodyWriteSegmentRequest `json:"WriteSegmentRequest"`
}

type CreateSegmentRequest struct {
	PathParams CreateSegmentPathParams
	Headers    CreateSegmentHeaders
	Request    CreateSegmentRequestBody `request:"mediaType=application/json"`
}

type CreateSegmentResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	CreateSegmentResponse        *shared.CreateSegmentResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
