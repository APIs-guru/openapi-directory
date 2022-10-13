package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegionsXAmzTargetEnum string

const (
	GetRegionsXAmzTargetEnumLightsail20161128GetRegions GetRegionsXAmzTargetEnum = "Lightsail_20161128.GetRegions"
)

type GetRegionsHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRegionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRegionsRequest struct {
	Headers GetRegionsHeaders
	Request shared.GetRegionsRequest `request:"mediaType=application/json"`
}

type GetRegionsResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetRegionsResult                *shared.GetRegionsResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
