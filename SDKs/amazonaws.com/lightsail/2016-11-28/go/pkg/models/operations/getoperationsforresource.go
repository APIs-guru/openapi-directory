package operations

import (
	"openapi/pkg/models/shared"
)

type GetOperationsForResourceXAmzTargetEnum string

const (
	GetOperationsForResourceXAmzTargetEnumLightsail20161128GetOperationsForResource GetOperationsForResourceXAmzTargetEnum = "Lightsail_20161128.GetOperationsForResource"
)

type GetOperationsForResourceHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetOperationsForResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetOperationsForResourceRequest struct {
	Headers GetOperationsForResourceHeaders
	Request shared.GetOperationsForResourceRequest `request:"mediaType=application/json"`
}

type GetOperationsForResourceResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetOperationsForResourceResult  *shared.GetOperationsForResourceResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
