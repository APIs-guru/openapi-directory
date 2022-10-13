package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRoutingControlStateXAmzTargetEnum string

const (
	UpdateRoutingControlStateXAmzTargetEnumToggleCustomerAPIUpdateRoutingControlState UpdateRoutingControlStateXAmzTargetEnum = "ToggleCustomerAPI.UpdateRoutingControlState"
)

type UpdateRoutingControlStateHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateRoutingControlStateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateRoutingControlStateRequest struct {
	Headers UpdateRoutingControlStateHeaders
	Request shared.UpdateRoutingControlStateRequest `request:"mediaType=application/json"`
}

type UpdateRoutingControlStateResponse struct {
	AccessDeniedException                   *interface{}
	ConflictException                       *interface{}
	ContentType                             string
	EndpointTemporarilyUnavailableException *interface{}
	InternalServerException                 *interface{}
	ResourceNotFoundException               *interface{}
	StatusCode                              int64
	ThrottlingException                     *interface{}
	UpdateRoutingControlStateResponse       map[string]interface{}
	ValidationException                     *interface{}
}
