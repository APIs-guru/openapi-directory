package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRoutingControlHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateRoutingControlRequestBody struct {
	RoutingControlArn  string `json:"RoutingControlArn"`
	RoutingControlName string `json:"RoutingControlName"`
}

type UpdateRoutingControlRequest struct {
	Headers UpdateRoutingControlHeaders
	Request UpdateRoutingControlRequestBody `request:"mediaType=application/json"`
}

type UpdateRoutingControlResponse struct {
	AccessDeniedException        *interface{}
	ConflictException            *interface{}
	ContentType                  string
	InternalServerException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
	UpdateRoutingControlResponse *shared.UpdateRoutingControlResponse
	ValidationException          *interface{}
}
