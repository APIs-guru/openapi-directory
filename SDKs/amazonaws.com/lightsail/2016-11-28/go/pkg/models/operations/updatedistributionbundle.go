package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDistributionBundleXAmzTargetEnum string

const (
	UpdateDistributionBundleXAmzTargetEnumLightsail20161128UpdateDistributionBundle UpdateDistributionBundleXAmzTargetEnum = "Lightsail_20161128.UpdateDistributionBundle"
)

type UpdateDistributionBundleHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDistributionBundleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateDistributionBundleRequest struct {
	Headers UpdateDistributionBundleHeaders
	Request shared.UpdateDistributionBundleRequest `request:"mediaType=application/json"`
}

type UpdateDistributionBundleResponse struct {
	AccessDeniedException          *interface{}
	ContentType                    string
	InvalidInputException          *interface{}
	NotFoundException              *interface{}
	OperationFailureException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	UnauthenticatedException       *interface{}
	UpdateDistributionBundleResult *shared.UpdateDistributionBundleResult
}
