package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveAttributesPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	AttributeType string `pathParam:"style=simple,explode=false,name=attribute-type"`
}

type RemoveAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

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
