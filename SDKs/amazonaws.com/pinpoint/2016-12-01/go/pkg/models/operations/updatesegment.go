package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSegmentPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	SegmentID     string `pathParam:"style=simple,explode=false,name=segment-id"`
}

type UpdateSegmentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateSegmentRequestBodyWriteSegmentRequest
// Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
type UpdateSegmentRequestBodyWriteSegmentRequest struct {
	Dimensions    *shared.SegmentDimensions `json:"Dimensions,omitempty"`
	Name          *string                   `json:"Name,omitempty"`
	SegmentGroups *shared.SegmentGroupList  `json:"SegmentGroups,omitempty"`
	Tags          map[string]string         `json:"tags,omitempty"`
}

type UpdateSegmentRequestBody struct {
	WriteSegmentRequest UpdateSegmentRequestBodyWriteSegmentRequest `json:"WriteSegmentRequest"`
}

type UpdateSegmentRequest struct {
	PathParams UpdateSegmentPathParams
	Headers    UpdateSegmentHeaders
	Request    UpdateSegmentRequestBody `request:"mediaType=application/json"`
}

type UpdateSegmentResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateSegmentResponse        *shared.UpdateSegmentResponse
}
