package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBucketBundleXAmzTargetEnum string

const (
	UpdateBucketBundleXAmzTargetEnumLightsail20161128UpdateBucketBundle UpdateBucketBundleXAmzTargetEnum = "Lightsail_20161128.UpdateBucketBundle"
)

type UpdateBucketBundleHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateBucketBundleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateBucketBundleRequest struct {
	Headers UpdateBucketBundleHeaders
	Request shared.UpdateBucketBundleRequest `request:"mediaType=application/json"`
}

type UpdateBucketBundleResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	InvalidInputException    *interface{}
	NotFoundException        *interface{}
	ServiceException         *interface{}
	StatusCode               int64
	UnauthenticatedException *interface{}
	UpdateBucketBundleResult *shared.UpdateBucketBundleResult
}
