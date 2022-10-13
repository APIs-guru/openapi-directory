package operations

import (
	"openapi/pkg/models/shared"
)

type GetKeyPairsXAmzTargetEnum string

const (
	GetKeyPairsXAmzTargetEnumLightsail20161128GetKeyPairs GetKeyPairsXAmzTargetEnum = "Lightsail_20161128.GetKeyPairs"
)

type GetKeyPairsHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetKeyPairsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetKeyPairsRequest struct {
	Headers GetKeyPairsHeaders
	Request shared.GetKeyPairsRequest `request:"mediaType=application/json"`
}

type GetKeyPairsResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetKeyPairsResult               *shared.GetKeyPairsResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
