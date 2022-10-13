package operations

import (
	"openapi/pkg/models/shared"
)

type GetRoutingControlStateXAmzTargetEnum string

const (
	GetRoutingControlStateXAmzTargetEnumToggleCustomerAPIGetRoutingControlState GetRoutingControlStateXAmzTargetEnum = "ToggleCustomerAPI.GetRoutingControlState"
)

type GetRoutingControlStateHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRoutingControlStateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRoutingControlStateRequest struct {
	Headers GetRoutingControlStateHeaders
	Request shared.GetRoutingControlStateRequest `request:"mediaType=application/json"`
}

type GetRoutingControlStateResponse struct {
	AccessDeniedException                   *interface{}
	ContentType                             string
	EndpointTemporarilyUnavailableException *interface{}
	GetRoutingControlStateResponse          *shared.GetRoutingControlStateResponse
	InternalServerException                 *interface{}
	ResourceNotFoundException               *interface{}
	StatusCode                              int64
	ThrottlingException                     *interface{}
	ValidationException                     *interface{}
}
