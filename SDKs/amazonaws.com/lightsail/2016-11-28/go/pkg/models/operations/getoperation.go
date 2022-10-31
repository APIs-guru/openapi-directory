package operations

import (
	"openapi/pkg/models/shared"
)

type GetOperationXAmzTargetEnum string

const (
	GetOperationXAmzTargetEnumLightsail20161128GetOperation GetOperationXAmzTargetEnum = "Lightsail_20161128.GetOperation"
)

type GetOperationHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetOperationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetOperationRequest struct {
	Headers GetOperationHeaders
	Request shared.GetOperationRequest `request:"mediaType=application/json"`
}

type GetOperationResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetOperationResult              *shared.GetOperationResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
