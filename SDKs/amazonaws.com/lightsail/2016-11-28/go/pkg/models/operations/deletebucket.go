package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteBucketXAmzTargetEnum string

const (
	DeleteBucketXAmzTargetEnumLightsail20161128DeleteBucket DeleteBucketXAmzTargetEnum = "Lightsail_20161128.DeleteBucket"
)

type DeleteBucketHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteBucketXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteBucketRequest struct {
	Headers DeleteBucketHeaders
	Request shared.DeleteBucketRequest `request:"mediaType=application/json"`
}

type DeleteBucketResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	DeleteBucketResult       *shared.DeleteBucketResult
	InvalidInputException    *interface{}
	NotFoundException        *interface{}
	ServiceException         *interface{}
	StatusCode               int64
	UnauthenticatedException *interface{}
}
