package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDistributionXAmzTargetEnum string

const (
	DeleteDistributionXAmzTargetEnumLightsail20161128DeleteDistribution DeleteDistributionXAmzTargetEnum = "Lightsail_20161128.DeleteDistribution"
)

type DeleteDistributionHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDistributionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
