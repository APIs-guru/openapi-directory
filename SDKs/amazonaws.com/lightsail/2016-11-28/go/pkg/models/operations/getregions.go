package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegionsXAmzTargetEnum string

const (
	GetRegionsXAmzTargetEnumLightsail20161128GetRegions GetRegionsXAmzTargetEnum = "Lightsail_20161128.GetRegions"
)

type GetRegionsHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRegionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
