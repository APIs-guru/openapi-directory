package operations

import (
	"openapi/pkg/models/shared"
)

type ReleaseStaticIPXAmzTargetEnum string

const (
	ReleaseStaticIPXAmzTargetEnumLightsail20161128ReleaseStaticIP ReleaseStaticIPXAmzTargetEnum = "Lightsail_20161128.ReleaseStaticIp"
)

type ReleaseStaticIPHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ReleaseStaticIPXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ReleaseStaticIPRequest struct {
	Headers ReleaseStaticIPHeaders
	Request shared.ReleaseStaticIPRequest `request:"mediaType=application/json"`
}

type ReleaseStaticIPResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ReleaseStaticIPResult           *shared.ReleaseStaticIPResult
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
