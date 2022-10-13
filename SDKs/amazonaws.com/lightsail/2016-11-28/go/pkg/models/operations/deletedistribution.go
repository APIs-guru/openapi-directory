package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDistributionXAmzTargetEnum string

const (
	DeleteDistributionXAmzTargetEnumLightsail20161128DeleteDistribution DeleteDistributionXAmzTargetEnum = "Lightsail_20161128.DeleteDistribution"
)

type DeleteDistributionHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDistributionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteDistributionRequest struct {
	Headers DeleteDistributionHeaders
	Request shared.DeleteDistributionRequest `request:"mediaType=application/json"`
}

type DeleteDistributionResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DeleteDistributionResult  *shared.DeleteDistributionResult
	InvalidInputException     *interface{}
	NotFoundException         *interface{}
	OperationFailureException *interface{}
	ServiceException          *interface{}
	StatusCode                int64
	UnauthenticatedException  *interface{}
}
