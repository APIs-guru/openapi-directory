package operations

import (
	"openapi/pkg/models/shared"
)

type SetResourceAccessForBucketXAmzTargetEnum string

const (
	SetResourceAccessForBucketXAmzTargetEnumLightsail20161128SetResourceAccessForBucket SetResourceAccessForBucketXAmzTargetEnum = "Lightsail_20161128.SetResourceAccessForBucket"
)

type SetResourceAccessForBucketHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SetResourceAccessForBucketXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SetResourceAccessForBucketRequest struct {
	Headers SetResourceAccessForBucketHeaders
	Request shared.SetResourceAccessForBucketRequest `request:"mediaType=application/json"`
}

type SetResourceAccessForBucketResponse struct {
	AccessDeniedException            *interface{}
	ContentType                      string
	InvalidInputException            *interface{}
	NotFoundException                *interface{}
	ServiceException                 *interface{}
	SetResourceAccessForBucketResult *shared.SetResourceAccessForBucketResult
	StatusCode                       int64
	UnauthenticatedException         *interface{}
}
