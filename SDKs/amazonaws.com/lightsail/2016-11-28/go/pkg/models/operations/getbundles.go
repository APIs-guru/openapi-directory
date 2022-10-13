package operations

import (
	"openapi/pkg/models/shared"
)

type GetBundlesXAmzTargetEnum string

const (
	GetBundlesXAmzTargetEnumLightsail20161128GetBundles GetBundlesXAmzTargetEnum = "Lightsail_20161128.GetBundles"
)

type GetBundlesHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetBundlesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetBundlesRequest struct {
	Headers GetBundlesHeaders
	Request shared.GetBundlesRequest `request:"mediaType=application/json"`
}

type GetBundlesResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetBundlesResult                *shared.GetBundlesResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
