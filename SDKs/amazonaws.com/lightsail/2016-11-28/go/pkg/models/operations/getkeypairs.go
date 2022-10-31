package operations

import (
	"openapi/pkg/models/shared"
)

type GetKeyPairsXAmzTargetEnum string

const (
	GetKeyPairsXAmzTargetEnumLightsail20161128GetKeyPairs GetKeyPairsXAmzTargetEnum = "Lightsail_20161128.GetKeyPairs"
)

type GetKeyPairsHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetKeyPairsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
