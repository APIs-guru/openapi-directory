package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteBucketAccessKeyXAmzTargetEnum string

const (
	DeleteBucketAccessKeyXAmzTargetEnumLightsail20161128DeleteBucketAccessKey DeleteBucketAccessKeyXAmzTargetEnum = "Lightsail_20161128.DeleteBucketAccessKey"
)

type DeleteBucketAccessKeyHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteBucketAccessKeyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteBucketAccessKeyRequest struct {
	Headers DeleteBucketAccessKeyHeaders
	Request shared.DeleteBucketAccessKeyRequest `request:"mediaType=application/json"`
}

type DeleteBucketAccessKeyResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	DeleteBucketAccessKeyResult *shared.DeleteBucketAccessKeyResult
	InvalidInputException       *interface{}
	NotFoundException           *interface{}
	ServiceException            *interface{}
	StatusCode                  int64
	UnauthenticatedException    *interface{}
}
