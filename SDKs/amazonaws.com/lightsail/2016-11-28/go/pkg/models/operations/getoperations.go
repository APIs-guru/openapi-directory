package operations

import (
	"openapi/pkg/models/shared"
)

type GetOperationsXAmzTargetEnum string

const (
	GetOperationsXAmzTargetEnumLightsail20161128GetOperations GetOperationsXAmzTargetEnum = "Lightsail_20161128.GetOperations"
)

type GetOperationsHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetOperationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetOperationsRequest struct {
	Headers GetOperationsHeaders
	Request shared.GetOperationsRequest `request:"mediaType=application/json"`
}

type GetOperationsResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetOperationsResult             *shared.GetOperationsResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
