package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRoutingControlStatesXAmzTargetEnum string

const (
	UpdateRoutingControlStatesXAmzTargetEnumToggleCustomerAPIUpdateRoutingControlStates UpdateRoutingControlStatesXAmzTargetEnum = "ToggleCustomerAPI.UpdateRoutingControlStates"
)

type UpdateRoutingControlStatesHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateRoutingControlStatesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateRoutingControlStatesRequest struct {
	Headers UpdateRoutingControlStatesHeaders
	Request shared.UpdateRoutingControlStatesRequest `request:"mediaType=application/json"`
}

type UpdateRoutingControlStatesResponse struct {
	AccessDeniedException                   *interface{}
	ConflictException                       *interface{}
	ContentType                             string
	EndpointTemporarilyUnavailableException *interface{}
	InternalServerException                 *interface{}
	ResourceNotFoundException               *interface{}
	StatusCode                              int64
	ThrottlingException                     *interface{}
	UpdateRoutingControlStatesResponse      map[string]interface{}
	ValidationException                     *interface{}
}
