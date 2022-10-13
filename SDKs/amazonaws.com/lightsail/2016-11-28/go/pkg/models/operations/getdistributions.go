package operations

import (
	"openapi/pkg/models/shared"
)

type GetDistributionsXAmzTargetEnum string

const (
	GetDistributionsXAmzTargetEnumLightsail20161128GetDistributions GetDistributionsXAmzTargetEnum = "Lightsail_20161128.GetDistributions"
)

type GetDistributionsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDistributionsXAmzTargetEnum `header:"name=X-Amz-Target"`
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
