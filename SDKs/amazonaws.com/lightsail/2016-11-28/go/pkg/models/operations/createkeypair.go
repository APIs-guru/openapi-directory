package operations

import (
	"openapi/pkg/models/shared"
)

type CreateKeyPairXAmzTargetEnum string

const (
	CreateKeyPairXAmzTargetEnumLightsail20161128CreateKeyPair CreateKeyPairXAmzTargetEnum = "Lightsail_20161128.CreateKeyPair"
)

type CreateKeyPairHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateKeyPairXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateKeyPairRequest struct {
	Headers CreateKeyPairHeaders
	Request shared.CreateKeyPairRequest `request:"mediaType=application/json"`
}

type CreateKeyPairResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	CreateKeyPairResult             *shared.CreateKeyPairResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
