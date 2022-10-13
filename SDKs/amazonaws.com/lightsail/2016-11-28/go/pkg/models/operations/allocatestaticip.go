package operations

import (
	"openapi/pkg/models/shared"
)

type AllocateStaticIPXAmzTargetEnum string

const (
	AllocateStaticIPXAmzTargetEnumLightsail20161128AllocateStaticIP AllocateStaticIPXAmzTargetEnum = "Lightsail_20161128.AllocateStaticIp"
)

type AllocateStaticIPHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AllocateStaticIPXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AllocateStaticIPRequest struct {
	Headers AllocateStaticIPHeaders
	Request shared.AllocateStaticIPRequest `request:"mediaType=application/json"`
}

type AllocateStaticIPResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	AllocateStaticIPResult          *shared.AllocateStaticIPResult
	ContentType                     string
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
