package operations

import (
	"openapi/pkg/models/shared"
)

type GetDistributionBundlesXAmzTargetEnum string

const (
	GetDistributionBundlesXAmzTargetEnumLightsail20161128GetDistributionBundles GetDistributionBundlesXAmzTargetEnum = "Lightsail_20161128.GetDistributionBundles"
)

type GetDistributionBundlesHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDistributionBundlesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetDistributionBundlesRequest struct {
	Headers GetDistributionBundlesHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetDistributionBundlesResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	GetDistributionBundlesResult *shared.GetDistributionBundlesResult
	InvalidInputException        *interface{}
	NotFoundException            *interface{}
	OperationFailureException    *interface{}
	ServiceException             *interface{}
	StatusCode                   int64
	UnauthenticatedException     *interface{}
}
