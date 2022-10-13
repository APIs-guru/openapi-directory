package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDistributionXAmzTargetEnum string

const (
	CreateDistributionXAmzTargetEnumLightsail20161128CreateDistribution CreateDistributionXAmzTargetEnum = "Lightsail_20161128.CreateDistribution"
)

type CreateDistributionHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDistributionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDistributionRequest struct {
	Headers CreateDistributionHeaders
	Request shared.CreateDistributionRequest `request:"mediaType=application/json"`
}

type CreateDistributionResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	CreateDistributionResult  *shared.CreateDistributionResult
	InvalidInputException     *interface{}
	NotFoundException         *interface{}
	OperationFailureException *interface{}
	ServiceException          *interface{}
	StatusCode                int64
	UnauthenticatedException  *interface{}
}
