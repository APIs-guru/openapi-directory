package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstanceStateXAmzTargetEnum string

const (
	GetInstanceStateXAmzTargetEnumLightsail20161128GetInstanceState GetInstanceStateXAmzTargetEnum = "Lightsail_20161128.GetInstanceState"
)

type GetInstanceStateHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetInstanceStateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetInstanceStateRequest struct {
	Headers GetInstanceStateHeaders
	Request shared.GetInstanceStateRequest `request:"mediaType=application/json"`
}

type GetInstanceStateResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetInstanceStateResult          *shared.GetInstanceStateResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
