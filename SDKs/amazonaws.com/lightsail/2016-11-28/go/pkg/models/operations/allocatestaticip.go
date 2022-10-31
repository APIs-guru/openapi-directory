package operations

import (
	"openapi/pkg/models/shared"
)

type AllocateStaticIPXAmzTargetEnum string

const (
	AllocateStaticIPXAmzTargetEnumLightsail20161128AllocateStaticIP AllocateStaticIPXAmzTargetEnum = "Lightsail_20161128.AllocateStaticIp"
)

type AllocateStaticIPHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AllocateStaticIPXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
