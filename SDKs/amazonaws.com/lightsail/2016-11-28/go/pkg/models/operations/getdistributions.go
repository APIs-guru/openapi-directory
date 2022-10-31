package operations

import (
	"openapi/pkg/models/shared"
)

type GetDistributionsXAmzTargetEnum string

const (
	GetDistributionsXAmzTargetEnumLightsail20161128GetDistributions GetDistributionsXAmzTargetEnum = "Lightsail_20161128.GetDistributions"
)

type GetDistributionsHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDistributionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetDistributionsRequest struct {
	Headers GetDistributionsHeaders
	Request shared.GetDistributionsRequest `request:"mediaType=application/json"`
}

type GetDistributionsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetDistributionsResult    *shared.GetDistributionsResult
	InvalidInputException     *interface{}
	NotFoundException         *interface{}
	OperationFailureException *interface{}
	ServiceException          *interface{}
	StatusCode                int64
	UnauthenticatedException  *interface{}
}
