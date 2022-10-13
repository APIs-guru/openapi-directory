package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBucketXAmzTargetEnum string

const (
	CreateBucketXAmzTargetEnumLightsail20161128CreateBucket CreateBucketXAmzTargetEnum = "Lightsail_20161128.CreateBucket"
)

type CreateBucketHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateBucketXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateBucketRequest struct {
	Headers CreateBucketHeaders
	Request shared.CreateBucketRequest `request:"mediaType=application/json"`
}

type CreateBucketResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	CreateBucketResult       *shared.CreateBucketResult
	InvalidInputException    *interface{}
	ServiceException         *interface{}
	StatusCode               int64
	UnauthenticatedException *interface{}
}
