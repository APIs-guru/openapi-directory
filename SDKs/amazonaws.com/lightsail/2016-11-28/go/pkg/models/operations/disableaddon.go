package operations

import (
	"openapi/pkg/models/shared"
)

type DisableAddOnXAmzTargetEnum string

const (
	DisableAddOnXAmzTargetEnumLightsail20161128DisableAddOn DisableAddOnXAmzTargetEnum = "Lightsail_20161128.DisableAddOn"
)

type DisableAddOnHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisableAddOnXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisableAddOnRequest struct {
	Headers DisableAddOnHeaders
	Request shared.DisableAddOnRequest `request:"mediaType=application/json"`
}

type DisableAddOnResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DisableAddOnResult        *shared.DisableAddOnResult
	InvalidInputException     *interface{}
	NotFoundException         *interface{}
	OperationFailureException *interface{}
	ServiceException          *interface{}
	StatusCode                int64
	UnauthenticatedException  *interface{}
}
