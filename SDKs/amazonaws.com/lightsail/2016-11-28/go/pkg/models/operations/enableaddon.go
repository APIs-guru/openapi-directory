package operations

import (
	"openapi/pkg/models/shared"
)

type EnableAddOnXAmzTargetEnum string

const (
	EnableAddOnXAmzTargetEnumLightsail20161128EnableAddOn EnableAddOnXAmzTargetEnum = "Lightsail_20161128.EnableAddOn"
)

type EnableAddOnHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableAddOnXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type EnableAddOnRequest struct {
	Headers EnableAddOnHeaders
	Request shared.EnableAddOnRequest `request:"mediaType=application/json"`
}

type EnableAddOnResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	EnableAddOnResult         *shared.EnableAddOnResult
	InvalidInputException     *interface{}
	NotFoundException         *interface{}
	OperationFailureException *interface{}
	ServiceException          *interface{}
	StatusCode                int64
	UnauthenticatedException  *interface{}
}
