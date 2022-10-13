package operations

import (
	"openapi/pkg/models/shared"
)

type StartInstanceXAmzTargetEnum string

const (
	StartInstanceXAmzTargetEnumLightsail20161128StartInstance StartInstanceXAmzTargetEnum = "Lightsail_20161128.StartInstance"
)

type StartInstanceHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartInstanceRequest struct {
	Headers StartInstanceHeaders
	Request shared.StartInstanceRequest `request:"mediaType=application/json"`
}

type StartInstanceResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StartInstanceResult             *shared.StartInstanceResult
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
