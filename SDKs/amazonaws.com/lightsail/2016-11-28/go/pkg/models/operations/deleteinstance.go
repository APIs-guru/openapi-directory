package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteInstanceXAmzTargetEnum string

const (
	DeleteInstanceXAmzTargetEnumLightsail20161128DeleteInstance DeleteInstanceXAmzTargetEnum = "Lightsail_20161128.DeleteInstance"
)

type DeleteInstanceHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteInstanceRequest struct {
	Headers DeleteInstanceHeaders
	Request shared.DeleteInstanceRequest `request:"mediaType=application/json"`
}

type DeleteInstanceResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	DeleteInstanceResult            *shared.DeleteInstanceResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
