package operations

import (
	"openapi/pkg/models/shared"
)

type GetBucketAccessKeysXAmzTargetEnum string

const (
	GetBucketAccessKeysXAmzTargetEnumLightsail20161128GetBucketAccessKeys GetBucketAccessKeysXAmzTargetEnum = "Lightsail_20161128.GetBucketAccessKeys"
)

type GetBucketAccessKeysHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetBucketAccessKeysXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetBucketAccessKeysRequest struct {
	Headers GetBucketAccessKeysHeaders
	Request shared.GetBucketAccessKeysRequest `request:"mediaType=application/json"`
}

type GetBucketAccessKeysResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetBucketAccessKeysResult *shared.GetBucketAccessKeysResult
	InvalidInputException     *interface{}
	NotFoundException         *interface{}
	ServiceException          *interface{}
	StatusCode                int64
	UnauthenticatedException  *interface{}
}
