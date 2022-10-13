package operations

import (
	"openapi/pkg/models/shared"
)

type DetachStaticIPXAmzTargetEnum string

const (
	DetachStaticIPXAmzTargetEnumLightsail20161128DetachStaticIP DetachStaticIPXAmzTargetEnum = "Lightsail_20161128.DetachStaticIp"
)

type DetachStaticIPHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DetachStaticIPXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DetachStaticIPRequest struct {
	Headers DetachStaticIPHeaders
	Request shared.DetachStaticIPRequest `request:"mediaType=application/json"`
}

type DetachStaticIPResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	DetachStaticIPResult            *shared.DetachStaticIPResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
