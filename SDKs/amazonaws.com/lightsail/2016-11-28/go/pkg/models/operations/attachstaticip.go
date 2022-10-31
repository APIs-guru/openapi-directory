package operations

import (
	"openapi/pkg/models/shared"
)

type AttachStaticIPXAmzTargetEnum string

const (
	AttachStaticIPXAmzTargetEnumLightsail20161128AttachStaticIP AttachStaticIPXAmzTargetEnum = "Lightsail_20161128.AttachStaticIp"
)

type AttachStaticIPHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AttachStaticIPXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AttachStaticIPRequest struct {
	Headers AttachStaticIPHeaders
	Request shared.AttachStaticIPRequest `request:"mediaType=application/json"`
}

type AttachStaticIPResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	AttachStaticIPResult            *shared.AttachStaticIPResult
	ContentType                     string
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
