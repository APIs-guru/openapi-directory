package operations

import (
	"openapi/pkg/models/shared"
)

type DetachStaticIPXAmzTargetEnum string

const (
	DetachStaticIPXAmzTargetEnumLightsail20161128DetachStaticIP DetachStaticIPXAmzTargetEnum = "Lightsail_20161128.DetachStaticIp"
)

type DetachStaticIPHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DetachStaticIPXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
