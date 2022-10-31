package operations

import (
	"openapi/pkg/models/shared"
)

type GetBucketBundlesXAmzTargetEnum string

const (
	GetBucketBundlesXAmzTargetEnumLightsail20161128GetBucketBundles GetBucketBundlesXAmzTargetEnum = "Lightsail_20161128.GetBucketBundles"
)

type GetBucketBundlesHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetBucketBundlesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetBucketBundlesRequest struct {
	Headers GetBucketBundlesHeaders
	Request shared.GetBucketBundlesRequest `request:"mediaType=application/json"`
}

type GetBucketBundlesResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	GetBucketBundlesResult   *shared.GetBucketBundlesResult
	InvalidInputException    *interface{}
	ServiceException         *interface{}
	StatusCode               int64
	UnauthenticatedException *interface{}
}
