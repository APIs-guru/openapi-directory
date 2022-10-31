package operations

import (
	"openapi/pkg/models/shared"
)

type ImportKeyPairXAmzTargetEnum string

const (
	ImportKeyPairXAmzTargetEnumLightsail20161128ImportKeyPair ImportKeyPairXAmzTargetEnum = "Lightsail_20161128.ImportKeyPair"
)

type ImportKeyPairHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ImportKeyPairXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ImportKeyPairRequest struct {
	Headers ImportKeyPairHeaders
	Request shared.ImportKeyPairRequest `request:"mediaType=application/json"`
}

type ImportKeyPairResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	ImportKeyPairResult             *shared.ImportKeyPairResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
