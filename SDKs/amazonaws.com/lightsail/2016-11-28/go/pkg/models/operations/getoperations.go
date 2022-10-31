package operations

import (
	"openapi/pkg/models/shared"
)

type GetOperationsXAmzTargetEnum string

const (
	GetOperationsXAmzTargetEnumLightsail20161128GetOperations GetOperationsXAmzTargetEnum = "Lightsail_20161128.GetOperations"
)

type GetOperationsHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetOperationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
