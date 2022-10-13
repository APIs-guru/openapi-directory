package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDistributionXAmzTargetEnum string

const (
	UpdateDistributionXAmzTargetEnumLightsail20161128UpdateDistribution UpdateDistributionXAmzTargetEnum = "Lightsail_20161128.UpdateDistribution"
)

type UpdateDistributionHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDistributionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateDistributionRequest struct {
	Headers UpdateDistributionHeaders
	Request shared.UpdateDistributionRequest `request:"mediaType=application/json"`
}

type UpdateDistributionResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InvalidInputException     *interface{}
	NotFoundException         *interface{}
	OperationFailureException *interface{}
	ServiceException          *interface{}
	StatusCode                int64
	UnauthenticatedException  *interface{}
	UpdateDistributionResult  *shared.UpdateDistributionResult
}
