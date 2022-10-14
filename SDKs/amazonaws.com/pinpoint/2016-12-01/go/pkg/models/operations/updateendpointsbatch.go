package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEndpointsBatchPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type UpdateEndpointsBatchHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateEndpointsBatchRequestBodyEndpointBatchRequest struct {
	Item []shared.EndpointBatchItem `json:"Item,omitempty"`
}

type UpdateEndpointsBatchRequestBody struct {
	EndpointBatchRequest UpdateEndpointsBatchRequestBodyEndpointBatchRequest `json:"EndpointBatchRequest"`
}

type UpdateEndpointsBatchRequest struct {
	PathParams UpdateEndpointsBatchPathParams
	Headers    UpdateEndpointsBatchHeaders
	Request    UpdateEndpointsBatchRequestBody `request:"mediaType=application/json"`
}

type UpdateEndpointsBatchResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateEndpointsBatchResponse *shared.UpdateEndpointsBatchResponse
}
