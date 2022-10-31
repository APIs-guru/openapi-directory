package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDistributionXAmzTargetEnum string

const (
	CreateDistributionXAmzTargetEnumLightsail20161128CreateDistribution CreateDistributionXAmzTargetEnum = "Lightsail_20161128.CreateDistribution"
)

type CreateDistributionHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDistributionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
