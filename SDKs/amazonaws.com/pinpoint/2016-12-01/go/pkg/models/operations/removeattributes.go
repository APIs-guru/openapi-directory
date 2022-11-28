package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveAttributesPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	AttributeType string `pathParam:"style=simple,explode=false,name=attribute-type"`
}

type RemoveAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// RemoveAttributesRequestBodyUpdateAttributesRequest
// Specifies one or more attributes to remove from all the endpoints that are associated with an application.
type RemoveAttributesRequestBodyUpdateAttributesRequest struct {
	Blacklist []string `json:"Blacklist,omitempty"`
}

type RemoveAttributesRequestBody struct {
	UpdateAttributesRequest RemoveAttributesRequestBodyUpdateAttributesRequest `json:"UpdateAttributesRequest"`
}

type RemoveAttributesRequest struct {
	PathParams RemoveAttributesPathParams
	Headers    RemoveAttributesHeaders
	Request    RemoveAttributesRequestBody `request:"mediaType=application/json"`
}

type RemoveAttributesResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	RemoveAttributesResponse     *shared.RemoveAttributesResponse
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
