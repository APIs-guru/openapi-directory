package operations

import (
	"openapi/pkg/models/shared"
)

type GetRoutingControlStateXAmzTargetEnum string

const (
	GetRoutingControlStateXAmzTargetEnumToggleCustomerAPIGetRoutingControlState GetRoutingControlStateXAmzTargetEnum = "ToggleCustomerAPI.GetRoutingControlState"
)

type GetRoutingControlStateHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRoutingControlStateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
